import { Column, Entity, Index } from "typeorm";
import { Base } from './Base';
@Entity()
export class User extends Base {
  @Column({ name: 'user_id', nullable: true })
  @Index({ unique: true })
  userId!: number;

  @Column({ name: 'user_name', nullable: true })
  userName!: string;

  @Column({ name: 'user_no', nullable: true })
  @Index()
  userNo!: string;
}