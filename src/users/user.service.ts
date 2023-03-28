import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  // get all users record
  async getAllUser(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  //get single record
  async getSingleUser(userId: number) {
    const result = await this.userRepository.findOneBy({ id: userId });

    if (result) {
      return result;
    } else {
      return {
        success: false,
        message: 'No Record Found',
      };
    }
  }

  //new add user record
  async addUser(newData: CreateUserDto) {
    const result = await this.userRepository.save(newData);
    return {
      success: true,
      message: 'new user added',
      result,
    };
  }

  //delete user record
  async deleteUser(userId: number) {
    const result = await this.userRepository.delete({ id: userId });
    return {
      success: true,
      message: 'User record deleted',
      result,
    };
  }

  //edit user record
  async editUser(userId: number, newData: UpdateUserDto) {
    const getRecord = await this.userRepository.findOneBy({ id: userId });
    if (!getRecord) {
      return {
        success: false,
        message: 'No record found',
      };
    } else {
      await this.userRepository.update({ id: userId }, newData);
      return {
        success: true,
        message: 'User record update successFully...',
      };
    }
  }
}
