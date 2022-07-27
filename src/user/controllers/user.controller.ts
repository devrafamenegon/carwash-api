import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/createUser.dto';
import { UserDTO } from '../dtos/user.dto';
import { UserService } from '../services/user.service';

@Controller('api/v1/client')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: CreateUserDTO): Promise<UserDTO> {
    return this.userService.create(user);
  }
}
