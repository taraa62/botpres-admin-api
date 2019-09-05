import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HookersEntity } from './hookers.entity';
import { StatusEntity } from './status.entity';
import { SharedEntityService } from './shared.entity.service';
import { SharedEntityResolver } from './shared.entity.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([HookersEntity, StatusEntity])],
  controllers: [],
  providers: [SharedEntityService, SharedEntityResolver],
})
export class SharedEntityModule {

}
