import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {

  get() {
    return {
      name : "Zero 👀",
      email: "usernameZero@github.com"
    };
  }

  create(req: Request) {
    return req.body;
  }

  update(req: Request, params: {userId: number}){
    return {
      body: req.body,
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
