import { Body, Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getUser() {
    return this.userService.getAllUser();
  }
}
