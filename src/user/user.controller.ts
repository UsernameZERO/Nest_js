import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  private userService;
  constructor(){
    this.userService = new UserService;
  }
  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  
  @Get()
  getUsers() {
    return this.userService.get();
  }
  
  @Patch('/:userId')
  update(@Body() updateUserDto: UpdateUserDto, @Param() params: {userId: number} ) {
    return this.userService.update(updateUserDto, params) ;
  }

  @Get('/:userId')
  getUserOnly(@Param() params: {userId: number}){
    return this.userService.getUser(params);
  }

  @Delete('/:userId')
  deleteUser(@Param() params: {userId: number}){
    return this.userService.delete(params);
  }
}