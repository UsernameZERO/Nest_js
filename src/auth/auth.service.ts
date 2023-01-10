import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor (
    private userServive: UserService,
    private jwtServie: JwtService,
    ){}

  async validateUser(email: string, password: string){
    const isUser = await this.userServive.findByEmail(email);
    if(isUser && isUser.password === password){
      return isUser;
    }
    return null;
  }

  async login(user: any){
    const payload = {email: user.email, sub: user.id };
    return {
      accessToken: this.jwtServie.sign(payload),
    }
  }
}
