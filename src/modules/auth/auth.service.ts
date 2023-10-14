import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/users/src/entities/user.entity';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(userObj: RegisterAuthDto) {
    const { password } = userObj;
    const plainToHash = await hash(password, 10);
    const newUser = new User();
    newUser.email = userObj.email;
    newUser.name = userObj.name;
    newUser.password = plainToHash;
    return await this.usersRepo.save(newUser);
  }

  async login(userObj: LoginAuthDto) {
    const { email, password } = userObj;
    const findUser = await this.usersRepo.findOneBy({ email: email });
    if (!findUser) throw new HttpException('Usuaro no encontrado', 404);
    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) throw new HttpException('Clave incorrecta', 403);
    const payload = { id: findUser.id, name: findUser.name };
    const token = await this.jwtService.sign(payload);
    const data = { user: findUser, token };
    return data;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
