import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api-module';
import { GraphQLModule } from '@nestjs/graphql';
import { DateScalar } from './shared/date.scalar';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ headers: req.headers }),
    }),
    ApiModule
  ],
  controllers: [],
  providers: [DateScalar],
})
export class AppModule {}
