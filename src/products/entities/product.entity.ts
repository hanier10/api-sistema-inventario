import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'products', name: 'product' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'int8', nullable: false })
  price: number;

  @Column({ type: 'int8', nullable: false })
  category_id: number;

  @Column({ type: 'int8', nullable: false })
  stock: number;

  @Column({ type: 'int8', nullable: false })
  user_id: number;

  @Column({ type: 'int8' })
  user_updated_id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at;
}
