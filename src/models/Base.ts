import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class Base {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "int", default: 1, comment: "-1: 删除 0: 禁用 1: 正常" })
  status!: number

  @CreateDateColumn({ type: 'timestamp', name: 'create_by', precision: null, default: () => 'CURRENT_TIMESTAMP' })
  createBy!: Date;

  // @BeforeInsert()
  // addDates() {
  //   this.createAt = new Date();
  //   this.updateAt = new Date();
  // }

  @CreateDateColumn({ type: 'timestamp', name: 'update_by', precision: null, default: () => 'CURRENT_TIMESTAMP' })
  updateBy!: Date;

  // @BeforeUpdate()
  // updateDates() {
  //   this.updateAt = new Date();
  // }
}