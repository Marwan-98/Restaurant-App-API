import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import OrderLine from "./OrderLine";
import Product from "./Product";
@Entity()
class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  firstName: string;

  @Column({
    nullable: false,
  })
  lastName: string;

  @Column({
    nullable: false,
  })
  mobileNum: number;

  @Column({
    nullable: false,
  })
  city: string;

  @Column({
    nullable: false,
  })
  address: string;

  @Column({
    default: false
  })
  completed: boolean

  @CreateDateColumn({
    type: "timestamptz",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.order)
  orderLine: OrderLine[];
}

export default Order;
