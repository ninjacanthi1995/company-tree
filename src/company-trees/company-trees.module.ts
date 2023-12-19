import { Module } from '@nestjs/common';
import { CompanyTreesService } from './company-trees.service';
import { CompanyTreesResolver } from './company-trees.resolver';

@Module({
  providers: [CompanyTreesResolver, CompanyTreesService],
})
export class CompanyTreesModule {}
