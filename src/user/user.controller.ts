import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  private userService;
  constructor(){
    this.userService = new UserService;
  }
  @Post()
  post(@Req() req: Request) {
    return req.body ;
  }
  
  @Get()
  getUsers() {
    return this.userService.get();
    // return {
    //   name : "Zero 👀",
    //   email: "usernameZero@github.com"
    // };
  }
  
  @Patch('/:userId')
  update(@Param() req: Request) {
    return req.body ;
  }

  @Get('/:userId')
  getUserOnly(@Param() params: {userId: number}){
    return params;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: {userId: number}){
    return params;
  }
}