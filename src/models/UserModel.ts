import { Column, Entity, Index } from "typeorm";
import { Base } from './BaseModel';
@Entity()
export class User extends Base {
  @Column({ name: 'user_id', nullable: true, 'comment': "用户ID" })
  @Index({ unique: true })
  userId!: number;

  @Column({ name: 'user_name', nullable: true, 'comment': "用户名称" })
  userName!: string;

  @Column({ name: 'user_no', nullable: true, 'comment': "用户编码" })
  @Index()
  userNo!: string;
}