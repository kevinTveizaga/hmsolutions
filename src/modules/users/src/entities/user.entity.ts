/* eslint-disable prettier/prettier */
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert} from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity({name: 'user'})
export class User extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  email: string;
  
  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
  updatedAt: Date; 

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}


