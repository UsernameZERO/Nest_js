import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  
  @Get()
  getUsers() {
    return this.userService.get();
  }
  
  @Patch('/:userId')
  update(@Body() updateUserDto: UpdateUserDto, @Param('userId', ParseIntPipe) userId: number ) {
    return this.userService.update(updateUserDto, userId) ;
  }

  @Get('/:userId')
  getUserOnly(@Param('userId', ParseIntPipe) userId: number){
    return this.userService.getUser(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number){
    return this.userService.delete(userId);
  }
}