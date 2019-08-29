import { Module } from '@nestjs/common';
import { OperatorModule } from './operators/operator.module';

@Module({
  imports: [OperatorModule],
  exports: [OperatorModule],
})
export class ApiModule {

}
