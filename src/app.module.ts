import { Module } from '@nestjs/common';
import * as process from 'node:process';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'node:path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SampleModule } from './sample/sample.module';
import { Sample } from './sample/entities/sample.entity';
import { SmsModule } from './modules/sms/sms.module';
import { OfficeModule } from './modules/office/office.module';
import { Office } from './modules/office/entities/office.entity';
import { ClientsModule } from './modules/clients/clients.module';
import { Client } from './modules/clients/entities/client.entity';
import { BannedWordsModule } from './modules/banned_words/banned_words.module';
import { BannedWord } from './modules/banned_words/entities/banned_word.entity';
import { LicenseModule } from './modules/license/license.module';
import { License } from './modules/license/entities/license.entity';
import { TemplatesModule } from './modules/templates/templates.module';
import { Template } from './modules/templates/entities/template.entity';
import { PendingMessagesModule } from './modules/pending_messages/pending_messages.module';
import { DailyMessagesModule } from './modules/daily_messages/daily_messages.module';
import { ProductsModule } from './modules/products/products.module';
import { Product } from './modules/products/entities/product.entity';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './modules/auth/auth.module';
import * as multer from 'multer';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'fakestatic'),
    }),
    MulterModule.register({
      storage: multer.diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}-${Date.now()}`);
        },
      }),
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        Sample,
        Office,
        Client,
        BannedWord,
        License,
        Template,
        Product,
      ],
      synchronize: true,
      logging: true,
    }),
    SampleModule,
    SmsModule,
    OfficeModule,
    ClientsModule,
    BannedWordsModule,
    LicenseModule,
    TemplatesModule,
    PendingMessagesModule,
    DailyMessagesModule,
    ProductsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
