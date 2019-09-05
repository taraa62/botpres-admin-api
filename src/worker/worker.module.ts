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
import { OperatorService } from '../operators/operator.service';
import { OperatorEntity } from '../operators/operator.entity';
import { WorkerController } from './worker.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity, MessageEntity, HookersEntity, StatusEntity, OperatorEntity])],
  controllers: [WorkerController],
  providers: [WorkerService, WorkerResolver, ClientService, MessageService, SharedEntityService, OperatorService],

})

export class WorkerModule {
}
