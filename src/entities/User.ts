import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Order from "./Order";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  mobile: number;

  @Column({
    nullable: false,
  })
  address: string;

  @Column({
    nullable: false,
  })
  city: string;

  @OneToMany(() => Order, (order) => order.user)
  order: Order[];
}

export default User;
