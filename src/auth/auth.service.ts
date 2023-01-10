import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor (private userServive: UserService){}

  async validateUser(email: string, password: string){
    const isUser = await this.userServive.findByEmail(email);
    if(isUser && isUser.password === password){
      return isUser;
    }
    return null;
  }
}
