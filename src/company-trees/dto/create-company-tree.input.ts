import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompanyTreeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
