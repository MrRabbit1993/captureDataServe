import { Column, Entity, Index } from "typeorm";
import { Base } from './Base';
@Entity()
export class Indicator extends Base {
  @Column({ name: 'code', nullable: true,'comment':"指标编码" })
  @Index({ unique: true })
  code!: number;

  @Column({ type: 'text', nullable: true ,'comment':"指标描述"})
  description!: string;

  @Column({ type: 'text', name: 'json', nullable: true, 'comment': "JSON文本" })
  json!: string;
}