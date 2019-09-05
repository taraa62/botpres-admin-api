import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MessageEntity } from '../message/message.entity';

@Entity('client')
export class ClientEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public created: Date;

  @UpdateDateColumn({ default: null })
  public updated: Date;

  @Column({ type: 'text', default: null })
  public name: string;

  @Column({ type: 'text', default: null })
  public email: string;

  @Column({ type: 'text', default: null })
  public phone: string;

  @Column({ type: 'text', default: null })
  public comment: string;

  @OneToMany(type => MessageEntity, mess=>mess.client,  { cascade: true })
  public messages: MessageEntity[];

}
