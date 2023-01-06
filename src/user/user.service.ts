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

  update(updateUserDto: UpdateUserDto, params: {userId: number}){
    return {
      body: updateUserDto,
      params
    }
  }

  getUser(params: {userId: number}){
    return params;
  }

  delete(params: {userId: number}){
    return params;
  }
}
