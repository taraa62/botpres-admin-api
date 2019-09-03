import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerResolver } from './worker.resolver';
import { ClientService } from '../client/client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from '../client/client.entity';
import { MessageService } from '../message/message.service';
import { SharedEntityService } from '../shared/entity/shared.entity.service';
import { MessageEntity } from '../message/message.entity';
import { HookersEntity } from '../shared/entity/hookers.entity';
import { StatusEntity } from '../shared/entity/status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity, MessageEntity, HookersEntity, StatusEntity])],
  controllers: [],
  providers: [WorkerService, WorkerResolver, ClientService, MessageService, SharedEntityService],

})

export class WorkerModule {
}
