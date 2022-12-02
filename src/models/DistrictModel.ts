import { Column, Entity, Index } from "typeorm";
import { Base } from './BaseModel';
@Entity()
export class District extends Base {
  @Column({ name: 'district_no',length:32, nullable: true, 'comment': "行政区划编号" })
  @Index({ unique: true })
  districtNo!: string;

  @Column({ name: 'district_name', nullable: true, 'comment': "行政区划名称" })
  districtName!: string;

  @Column({ name: 'pid', nullable: true, 'comment': "父ID" })
  @Index()
  pid!: number;

  @Column({ name: 'poltype', nullable: true, 'comment': "行政级别（POLTYPE）" })
  poltype!: number;

  @Column({ name: 'order_no', nullable: true,  'comment': "排序号" })
  orderNo!: number;

  @Column({ name: 'remark', nullable: true, 'comment': "备注" })
  remark!: string;
}

