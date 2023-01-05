import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/user')
export class UserController {
  @Post()
  post(@Req() req: Request) {
    return req.body ;
  }
  
  @Get()
  getUsers() {
    return {
      name : "Zero 👀",
      email: "usernameZero@github.com"
    };
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