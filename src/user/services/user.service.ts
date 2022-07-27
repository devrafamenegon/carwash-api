import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/createUser.dto';
import { UserDTO } from '../dtos/user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  public create(user: CreateUserDTO): Promise<UserDTO> {
    return this.userRepository.create(user);
  }
}
