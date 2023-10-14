import { User } from 'src/modules/users/src/entities/user.entity';
import { BillingType } from 'src/modules/billing/src/entities/billingType.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'billing' })
export class Billing extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  invoiceNumber: number;

  @Column()
  customerId: number;

  @Column()
  @ManyToOne(() => BillingType, (BillingType) => BillingType.id)
  billingType: number;

  @ManyToOne(() => User, (User) => User.id)
  customer: User;

  @Column({ default: 0.0, type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  coinType: string;

  @Column()
  literal: string;

  @Column()
  billingMonth: string;

  @Column()
  billingYear: number;

  @Column()
  floor: number;

  @Column()
  room: number;

  @Column()
  paymentMethod: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
