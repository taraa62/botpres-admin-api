import { Column, CreateDateColumn, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StatusEntity } from '../shared/entity/status.entity';
import { ClientEntity } from '../client/client.entity';

@Entity('message')
export class MessageEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public created: Date;

  @UpdateDateColumn()
  public updated: Date;

  @Column({ type: 'text' })
  public conversation: string;

  @Column('int')
  public operatorID: number;

  @Column({ type: 'text', default: null })
  public hookerID: string;

  @OneToOne(clientID => ClientEntity)
  @JoinTable()
  public clientID: ClientEntity;

  @OneToOne(status => StatusEntity)
  @JoinTable()
  public statusEnd: StatusEntity;

  @Column({ type: 'text', default: null })
  public comment: string;

}
