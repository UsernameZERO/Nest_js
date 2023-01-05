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

  
}
