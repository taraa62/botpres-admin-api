import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientResolver } from './client.resolver';
import { ClientEntity } from './client.entity';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { StatusEntity } from '../shared/entity/status.entity';
import { HookersEntity } from '../shared/entity/hookers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity, StatusEntity, HookersEntity])],
  controllers: [ClientController],
  providers: [ClientService, ClientResolver],
})
export class ClientModule {
}
