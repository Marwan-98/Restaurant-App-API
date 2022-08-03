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
import Order from "./Order";
import Product from "./Product";

@Entity()
class OrderLine extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: number;

  @Column()
  productName: string;

  @Column()
  productId: number;

  @Column()
  orderQty: number;

  @Column({ default: false })
  completed: boolean;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;

  @ManyToOne(() => Order, (order) => order.orderLine)
  order: Order;

  @ManyToOne(() => Product, (product) => product.order)
  product: Product;
}

export default OrderLine;
