import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  // use a encryption solution for password like bcrypt, no plain text
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // user should be of type User
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId }

    return {
        access_token: this.jwtService.sign(payload)
    }
  }
}