import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from './message.entity';
import { InsertResult, Repository } from 'typeorm';
import { ClientEntity } from '../client/client.entity';
import { ClientInfo } from '../worker/worker.dto';

@Injectable()
export class MessageService {

  constructor(@InjectRepository(MessageEntity) private messRepos: Repository<MessageEntity>) {

  }

  public async appendString(client: ClientEntity, info: ClientInfo, mess: String): Promise<MessageEntity> {
    try {
      const data = {
        conversation: mess,
        hookerID: info.selectGirl,
        operatorID: info.operatorLogin,
        statusEnd: info.statusEnd,
        client: client
      };
      const res: InsertResult = await this.messRepos.insert(data as any).catch(er => {
        console.error(er);
        return null;
      });
      return res ? res.raw[0] : res;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  public async dropTable(): Promise<any> {

    return await this.messRepos.createQueryBuilder().connection.createQueryRunner('master').dropTable('message').then(v => {
      return { status: 'ok', error: null };
    }).catch(er => {
      return { status: 'error', error: er };
    });

  }



}
