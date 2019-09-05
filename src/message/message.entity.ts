import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
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

  @Column('text')
  public operatorID: string;

  @Column({ type: 'text', default: null })
  public hookerID: string;

  @Column('text')
  public statusEnd: string;

  @Column({ type: 'text', default: null })
  public comment: string;

  @ManyToOne(type => ClientEntity, client=> client.messages)
  public client: ClientEntity;

}
