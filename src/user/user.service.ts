import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  get() {
    return {
      name : "Zero 👀",
      email: "usernameZero@github.com"
    };
  }
}
