import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('client')
export class ClientEntity {

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public created: Date;

  @UpdateDateColumn({default:null})
  public updated: Date;

  @Column({type:'text', default:null})
  public name: string;

  @Column({type:'text', default:null})
  public email: string;

  @Column({type:'text', default:null})
  public phone: string;

  @Column({type:'text', default:null})
  public comment: string;

}
