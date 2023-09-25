import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { RolesService } from '../services/roles.service';

@Controller('api/roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  getAll() {
    return this.rolesService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.rolesService.findOne(id);
  }
  @Post()
  create(@Body() body: any) {
    return this.rolesService.create(body);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.rolesService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.rolesService.delete(id);
  }
}
