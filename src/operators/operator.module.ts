import { Module } from '@nestjs/common';
import { OperatorController } from './operator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatorEntity } from './operator.entity';
import { OperatorService } from './operator.service';
import { OperatorResolver } from './operator.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([OperatorEntity])],
  controllers: [OperatorController],
  providers: [OperatorService, OperatorResolver],
})

export class OperatorModule {
}
