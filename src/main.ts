import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger } from '@nestjs/common';
import { Transport } from '@nestjs/common/enums/transport.enum';

const port = process.env.PORT || 4000;
process.env.SERVICE_HOST = process.env.SERVICE_HOST || 'localhost';
(<any> process.env).SERVICE_PORT = process.env.SERVICE_PORT || 5555;

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  /*app.enableCors({
    origin: [
      'http://localhost:4200', // angular
      'http://localhost:3000', // react
      'http://localhost:8081', // react-native
    ],
  });*/


  app.connectMicroservice({
    transport: Transport.TCP,
    options: {

      retryDelay: 2000,
      retryAttempts: 5,
    },
  });

  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}

bootstrap();
