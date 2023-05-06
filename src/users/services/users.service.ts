import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IntegerType, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: number) {
    return this.usersRepo.findBy({ id: id });
  }

  create(body: any) {
    const newUser = new User();
    newUser.email = body.email;
    newUser.name = body.name;
    newUser.password = body.password;
    return this.usersRepo.save(newUser);
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
