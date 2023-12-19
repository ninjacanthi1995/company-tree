import { Test, TestingModule } from '@nestjs/testing';
import { CompanyTreesService } from './company-trees.service';
import resultData from './data/result.data';

describe('CompanyTreesService', () => {
  let service: CompanyTreesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyTreesService],
    }).compile();

    service = module.get<CompanyTreesService>(CompanyTreesService);
  });

  describe('getTree', () => {
    it('should return the company tree', async () => {
      const tree = await service.getTree()
      expect(tree).toEqual(resultData);
    });
  });
});
