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
  store(@Req() req: Request) {
    return this.userService.create(req);
  }
  
  @Get()
  getUsers() {
    return this.userService.get();
  }
  
  @Patch('/:userId')
  update(@Req() req: Request, @Param() params: {userId: number} ) {
    return this.userService.update(req, params) ;
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