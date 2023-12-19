import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'company ' })
export class Company {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: string;

  @Field()
  name: string;

  @Field()
  parentId: string;
}
