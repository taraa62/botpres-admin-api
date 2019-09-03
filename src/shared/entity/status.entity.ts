import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('conversStatus')
export class StatusEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('text')
  public status: string;
}
