import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  phone: number;
}
