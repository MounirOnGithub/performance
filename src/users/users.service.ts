import { Injectable } from '@nestjs/common';
import { User } from './users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createCatDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createCatDto);
    return createdUser.save();
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username: username });
  }

  async findOneById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }
}