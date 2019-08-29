import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('operator')
export class OperatorEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string;


  @CreateDateColumn()
  public created:Date;

  @UpdateDateColumn()
  public updated: Date;

  @Column("text")
  public login :string;

  @Column("text")
  public name :string;

  @Column("text")
  public lastname :string;

}
