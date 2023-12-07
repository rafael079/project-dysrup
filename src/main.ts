import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const configService = app.get(ConfigService);
  const port = configService.get('port');

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(configService.get('cors'));

  const options = new DocumentBuilder()
    .setTitle('API de Testes')
    .setDescription('API de teste gerenciador de Projetos')
    .setVersion('1.0')
    .addTag('projects')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(port);
}

bootstrap();
