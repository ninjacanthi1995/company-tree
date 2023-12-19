import { CreateCompanyTreeInput } from './create-company-tree.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompanyTreeInput extends PartialType(CreateCompanyTreeInput) {
  @Field(() => Int)
  id: number;
}
