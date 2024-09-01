import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 /** Use validation pipe globally */
 app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
);

/** Create Swagger Configuration */
const config = new DocumentBuilder()
.setTitle('NestJS Masterclass - Blog app API')
.setDescription('Use the base API URL as http://localhost:3000')
.addServer('http://localhost:3000/')
.setVersion('1.0')
.build();
// Instantiate Swagger
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
