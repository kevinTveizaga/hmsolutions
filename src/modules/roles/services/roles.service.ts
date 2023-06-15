import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from '../entities/rol.entity';

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Rol) private rolesRepo: Repository<Rol>) {}

  findAll() {
    return this.rolesRepo.find();
  }

  findOne(id: number) {
    return this.rolesRepo.findBy({ id: id });
  }

  create(body: any) {
    const newRol = new Rol();
    newRol.name = body.name;
    newRol.description = body.description;
    return this.rolesRepo.save(newRol);
  }

  async update(id: number, body: any) {
    const rol = await this.rolesRepo.findOne({
      where: {
        id: body.id,
      },
    });
    this.rolesRepo.merge(rol, body);
    return this.rolesRepo.save(rol);
  }

  async delete(id: any) {
    await this.rolesRepo.delete(id);
    return true;
  }
}
