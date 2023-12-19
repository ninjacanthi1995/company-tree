import { Resolver, Query } from '@nestjs/graphql';
import { CompanyTreesService } from './company-trees.service';
import { CompanyTree } from './entities/company-tree.entity';

@Resolver(() => CompanyTree)
export class CompanyTreesResolver {
  constructor(private readonly companyTreesService: CompanyTreesService) {}

  @Query(() => [CompanyTree], { name: 'getTree' })
  getTree() {
    return this.companyTreesService.getTree();
  }
}
