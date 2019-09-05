import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientInfo, WorkerRO } from './worker.dto';
import { ClientService } from '../client/client.service';
import { MessageService } from '../message/message.service';
import { SharedEntityService } from '../shared/entity/shared.entity.service';
import { ClientEntity } from '../client/client.entity';
import { MessageEntity } from '../message/message.entity';
import { HookersEntity } from '../shared/entity/hookers.entity';
import { OperatorEntity } from '../operators/operator.entity';
import { OperatorService } from '../operators/operator.service';

@Injectable()
export class WorkerService {

  constructor(
    private clientService: ClientService,
    private messageService: MessageService,
    private hookersService: SharedEntityService,
    private operatorService: OperatorService,
  ) {
  }

  public async addConversation(clientInfo: ClientInfo, mess: String): Promise<WorkerRO> {
    const user: ClientEntity = await this.updUser(clientInfo);
    if (!user) {
      throw new HttpException('User aren\'t create', HttpStatus.BAD_REQUEST);
    }
    const hookerInfo: HookersEntity = await this.getHooker(clientInfo);
    if (hookerInfo) {
      clientInfo.selectGirl = hookerInfo.id;
    }

    const oper: OperatorEntity = await this.getOperator(clientInfo);
    if (oper) {
      clientInfo.operatorLogin = oper.id;
    }

    const resMess = await this.appendMessage(user, clientInfo, mess);

    return { isCreate: !!resMess, isNewUser: user.created === user.updated };
  }

  private async updUser(info: ClientInfo): Promise<ClientEntity> {
    // const user = await this.clientService.getUser(info);
    const user: ClientEntity = await this.clientService.createUser(info, true);

    return user;
  }

  private async getHooker(info: ClientInfo): Promise<HookersEntity> {
    if (info.selectGirl) {
      // const girl: HookersEntity = await this.hookersService.getIdHooker(info.selectGirl.toString());
      const girl: HookersEntity = await this.hookersService.selectHooker(info.selectGirl.toString());
      if (girl && girl.id) {
        return girl;
      }
    }
    return null;
  }

  private async getOperator(info: ClientInfo): Promise<OperatorEntity> {
    const oper: OperatorEntity = await this.operatorService.getOperator(info.operatorLogin).catch(er => {
      console.error(er);
      return null;
    });
    return oper;
  }

  private async appendMessage(client: ClientEntity, info: ClientInfo, mess: String): Promise<MessageEntity> {
    const res: MessageEntity = await this.messageService.appendString(client, info, mess);
    return res;
  }



  public async getAllClients(opt:ClientEntity = null):Promise<ClientEntity[]>{
    return await this.clientService.getAllUser(opt);
  }









  public async dropTable(name: string): Promise<any> {
    //TODO only for  process.env !== 'prod'
    switch (name) {
      case "message":
        return this.messageService.dropTable()
    }
    return {status:"error", error:"undefined name a table"};
  }
}
