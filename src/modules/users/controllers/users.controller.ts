import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../../../common/dto/CreateUserDto';
import { SETTINGS } from 'src/modules/utils/app.util';
import { User } from '../entities/user.entity';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
  @Post('/register')
  async doUserRegistration(
    @Body(SETTINGS.VALIDATION_PIPE)
    body: CreateUserDto,
  ): Promise<User> {
    return await this.usersService.doUserRegistration(body);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.usersService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}
