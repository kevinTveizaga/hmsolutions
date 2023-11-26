import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Building } from './entities/building.entity';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Building) private buildingsRepo: Repository<Building>,
  ) {}
  create(body: any) {
    const newBuilding = new Building();
    newBuilding.name = body.name;
    newBuilding.phone = body.phone;
    return this.buildingsRepo.save(newBuilding);
  }

  findAll() {
    return this.buildingsRepo.find();
  }

  findOne(id: number) {
    return this.buildingsRepo.findBy({ id: id });
  }

  async update(id: number, body: any) {
    const building = await this.buildingsRepo.findOne({
      where: { id: body.id },
    });
    this.buildingsRepo.merge(building, body);
    return this.buildingsRepo.save(building);
  }

  async remove(id: number) {
    await this.buildingsRepo.delete(id);
    return true;
  }
}
