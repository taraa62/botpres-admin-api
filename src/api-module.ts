import { Module } from '@nestjs/common';
import { OperatorModule } from './operators/operator.module';
import { SharedEntityModule } from './shared/entity/shared.entity.module';
import { MessageModule } from './message/message.module';
import { ClientModule } from './client/client.module';
import { WorkerModule } from './worker/worker.module';


@Module({
  imports: [
    OperatorModule,
    SharedEntityModule,
    MessageModule,
    ClientModule,
    WorkerModule,
  ],
  exports: [
    OperatorModule,
    SharedEntityModule,
    MessageModule,
    ClientModule,
    WorkerModule,
  ]
})
export class ApiModule {

}
