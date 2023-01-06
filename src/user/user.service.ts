import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  get() {
    return {
      name : "Zero 👀",
      email: "usernameZero@github.com"
    };
  }

  create(createUserDtoo: CreateUserDto) {
    return createUserDtoo;
  }

  update(updateUserDto: UpdateUserDto, userId: number){
    return {
      body: updateUserDto,
      userId
    }
  }

  getUser(userId: number){
    return {userId};
  }

  delete(userId: number){
    return {userId};
  }
}
