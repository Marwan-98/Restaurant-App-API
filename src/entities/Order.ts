import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Menu from "./Menu";
import User from "./User";

@Entity()
class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  orderQty: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Menu, (menu) => menu.orders)
  @JoinColumn({ name: "itemId" })
  item: Menu;
}

export default Order;
