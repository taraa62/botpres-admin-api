import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hookers')
export class HookersEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('text')
  public name: string;

  @Column('int')
  public selected: number;

}
