import { Injectable } from '@nestjs/common';
import { ClientInfo } from '../worker/worker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './client.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ClientService {

  constructor(@InjectRepository(ClientEntity) private clintRepos: Repository<ClientEntity>) {

  }

  public async getUser(info: ClientInfo): Promise<any> {
    const user = await this.clintRepos.createQueryBuilder()
      .where(`email='${info.email}'`)
      .orWhere(`phone='${info.phone}'`)
      //   .orWhere(})
      .getOne();
    return user;
  }

  public async createUser(info: ClientInfo, isFindInDB: boolean = false): Promise<ClientEntity> {
    let user = null;
    if (isFindInDB) {
      user = await this.getUser(info);
      if (user) {
        return user;
      }
    }
    const data = {
      name: info.name || null,
      phone: info.phone || null,
      email: info.email || null,
      comment: null,
    };
    /*user = await this.clintRepos.insert(data as any).catch(er => {
      console.error(er);
      return null;
    });*/

    user = await this.clintRepos.create(data as any);
    await this.clintRepos.save(user);

    return user.raw ? user.raw[0] : user;
    // return null;
  }

  public async getAllUser(opt: ClientEntity = null): Promise<ClientEntity[]> {
    let res;
    opt = plainToClass(ClientEntity, opt);
    // res = await this.clintRepos.find({relations:["messages"]});
    res = await this.clintRepos.find({ where: opt, join: { alias: 'u', innerJoinAndSelect: { messages: 'u.messages' } } });
    return res;
  }

}
