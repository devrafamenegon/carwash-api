import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/v1/client')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create() {
    return this.userService.create();
  }
}
