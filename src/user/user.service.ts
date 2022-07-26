import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public create(): string {
    return 'This action creates a new user';
  }
}
