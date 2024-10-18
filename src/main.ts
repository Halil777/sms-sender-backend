import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Sms sender')
    .setDescription('Sms sender Api')
    .setVersion('0.1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .addTag('products')
    .build();

  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow all methods
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
