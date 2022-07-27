import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { IsOverThan18YearsOldConstraint } from './validators/IsOverThan18YearsOld.validator';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class UserModule {}
