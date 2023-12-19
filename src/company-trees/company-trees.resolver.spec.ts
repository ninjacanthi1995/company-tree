import { Test, TestingModule } from '@nestjs/testing';
import { CompanyTreesResolver } from './company-trees.resolver';
import { CompanyTreesService } from './company-trees.service';
import resultData from './data/result.data';

describe('CompanyTreesResolver', () => {
  let resolver: CompanyTreesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyTreesResolver, CompanyTreesService],
    }).compile();

    resolver = module.get<CompanyTreesResolver>(CompanyTreesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should get the cats array', async () => {
    const result = await resolver.getTree()
    expect(result).toEqual(resultData);
  });
});
