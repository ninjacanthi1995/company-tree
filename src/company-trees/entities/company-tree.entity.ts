import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'company-tree ' })
export class CompanyTree {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: string;

  @Field()
  name: string;

  @Field()
  parentId: string;

  @Field()
  cost: number;

  @Field(type => [CompanyTree])
  children: CompanyTree[];
}
