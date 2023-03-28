import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getUser() {
    return this.userService.getAllUser();
  }

  @Get('/:id')
  getSingleUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.getSingleUser(userId);
  }

  @Post('/new')
  addUser(@Body() newData: CreateUserDto) {
    return this.userService.addUser(newData);
  }

  @Patch('/edit/:id')
  updateUser(
    @Param('id', ParseIntPipe) userId: number,
    @Body() newData: UpdateUserDto,
  ) {
    return this.userService.editUser(userId, newData);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
}
