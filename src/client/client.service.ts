import { Injectable } from '@nestjs/common';
import { ClientInfo } from '../worker/worker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './client.entity';
import { Repository } from 'typeorm';

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
      email: info.phone || null,
      comment: null,
    };
    user = await this.clintRepos.insert(data as any).catch(er => {
      console.error(er);
      return null;
    });
    return user.raw ? user.raw[0] : user;
    // return null;
  }
}
