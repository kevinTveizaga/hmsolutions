import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from 'src/modules/dto/CreateUserDto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: number) {
    return this.usersRepo.findBy({ id: id });
  }

  async doUserRegistration(body: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.email = body.email;
    newUser.name = body.name;
    newUser.password = body.password;
    return await this.usersRepo.save(newUser);
  }

  async update(id: number, body: any) {
    const user = await this.usersRepo.findOne({
      where: {
        id: body.id,
      },
    });
    this.usersRepo.merge(user, body);
    return this.usersRepo.save(user);
  }

  async delete(id: any) {
    await this.usersRepo.delete(id);
    return true;
  }
}
