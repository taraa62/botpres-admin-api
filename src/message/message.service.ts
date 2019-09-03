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
        operatorID: 1,
        statusEnd: info.statusEnd,
        clientID: client.id,
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

}
