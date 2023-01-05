import { Controller, Get, Post } from "@nestjs/common";


@Controller()
export class AppController {

  @Get()
  getUser() {
    return 'waiting for me 😉';
  }
  @Get('/user')
  getUsers() {
    return {
      name : "Zero 👀",
      email: "usernameZero@github.com"
    };
  }
}