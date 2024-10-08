import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { config } from 'aws-sdk';
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
    transformOptions: {
      enableImplicitConversion: true,
    }
  }),
);

/** Create Swagger Configuration */
const configSwagger = new DocumentBuilder()
.setTitle('REST API for BLOG WEB APP')
.setDescription('The REST API documentation for the BLOG WEB APP. Created with NestJS')
.addServer('http://localhost:3000/')
.addServer('https://backend-blog-app-ua3a.onrender.com/')
.addBearerAuth()
.setVersion('1.0')
.build();
// Instantiate Swagger
const document = SwaggerModule.createDocument(app, configSwagger);
SwaggerModule.setup('api', app, document);

 // Setup AWS SDK configuration used uploading the files to S3 bucket
 const configService = app.get(ConfigService);
 config.update({
   credentials: {
     accessKeyId: configService.get('appConfig.awsAccessKeyId'),
     secretAccessKey: configService.get('appConfig.awsSecretAccessKey'),
   },
   region: configService.get('appConfig.awsRegion'),
 })

  app.enableCors();

  await app.listen(process.env.PORT_APP || 3000);
}
bootstrap();
