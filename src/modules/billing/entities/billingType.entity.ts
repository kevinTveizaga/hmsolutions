import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//crear controladores y servicios para billing types
@Entity({ name: 'billingType' })
export class BillingType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;
}
