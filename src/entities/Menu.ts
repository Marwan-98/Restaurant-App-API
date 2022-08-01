import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Order from "./Order";

@Entity()
class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  itemName: string;

  @Column({
    nullable: false,
  })
  ingredients: string;

  @Column({
    nullable: false,
  })
  price: number;

  @Column({
    nullable: false,
    default: 0
  })
  orderQty: number;

  @Column({
    nullable: false,
  })
  category: string;

  @Column()
  popular: boolean;

  @OneToMany(() => Order, (order) => order.item)
  orders: Order[];
}

export default Menu;
