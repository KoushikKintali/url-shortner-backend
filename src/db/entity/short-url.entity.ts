import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('short_url')
export class ShortURL extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  longURL: string;

  @Column({ type: 'text' })
  shortURL: string;

  @CreateDateColumn()
  expiryDate: Date;

  @Column({ default: false })
  enableLogging: boolean;

  @Column({ default: false })
  enableCustomization: boolean;

  @Column({ default: false })
  enablePassword: boolean;

  @Column({ nullable: true })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  modifiedAt: Date;
}
