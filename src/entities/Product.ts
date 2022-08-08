import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Category from "./Category";
import Order from "./Order";
import OrderLine from "./OrderLine";

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: "https://w7.pngwing.com/pngs/290/929/png-transparent-burger-hamburger-button-cheeseburger-junk-food-fast-food-junk-food-food-fast-food-restaurant-cheeseburger.png"
  })
  url: string;

  @Column({
    nullable: false,
  })
  itemName: string;

  @Column({
    nullable: false,
  })
  description: string;

  @Column({
    nullable: false,
  })
  price: number;

  @Column()
  popular: boolean;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => OrderLine, (orderLine) => orderLine.product)
  order: OrderLine[];
}

export default Product;
