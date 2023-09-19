import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from './constants';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @Public()
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user
    }
}
