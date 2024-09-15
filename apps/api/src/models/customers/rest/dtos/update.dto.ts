import { PartialType } from '@nestjs/swagger'
import { CreateCustomer } from './create.dto'
import { Customer } from '@prisma/client'

export class UpdateCustomer extends PartialType(CreateCustomer) {
  id: Customer['uid']
}
