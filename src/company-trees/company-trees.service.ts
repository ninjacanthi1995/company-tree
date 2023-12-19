import { Injectable } from '@nestjs/common';
import { CompanyTree } from './entities/company-tree.entity';
import companies from './data/companies.data';
import travels from './data/travels.data';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyTreesService {
  async getTree(): Promise<CompanyTree[]> {
    // Create an "index" of companies
    const companyIds: { [key: string]: CompanyTree } = companies.reduce((acc, curr: Company) => ({
        ...acc,
        [curr.id]: {
            ...curr,
            cost: 0,
            children: []
        }
    }), {})

    // Sum cost of each company
    travels.forEach(travel => {
        companyIds[travel.companyId].cost += parseFloat(travel.price)
    })
    
    // Populate the children array of each company
    companies.forEach(company => {
        company.parentId !== "0" && companyIds[company.parentId].children.push(companyIds[company.id])
    })

    // Get the company tree (array of 1 root element)
    const companyTree: CompanyTree[] = Object.values(companyIds).filter((item: CompanyTree) => item.parentId === "0")

    // Calculate cost for all the nodes base on their children
    this.calculateCost(companyTree[0])
    
    return companyTree;
  }

  calculateCost(node): Number {
    if (!node.children.length) return node.cost
    const sum = node.children.reduce((acc, curr) => acc + this.calculateCost(curr), node.cost)
    node.cost = sum
    return sum
  }
}
