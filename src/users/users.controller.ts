import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Public } from "src/auth/constants";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    @Public()
    async createAccount(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Get(':username')
    async getProfile(@Param('username') username: string) {
        return await this.userService.findOneByUsername(username);
    }

    @Get(':id')
    async getProfileById(@Param('id') id: string) {
        return await this.userService.findOneById(id);
    }
}