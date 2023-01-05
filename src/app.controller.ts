import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";


@Controller()
export class AppController {

  @Get()
  getUser() {
    return 'waiting for me 😉';
  }

  @Post()
  store() {
    return 'going to home ';
  }

  @Post('/user')
  post(@Req() req: Request) {
    return req.body ;
  }
  
  @Get('/user')
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
