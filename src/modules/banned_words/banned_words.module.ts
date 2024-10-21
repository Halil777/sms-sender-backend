import { Module } from '@nestjs/common';
import { BannedWordsService } from './banned_words.service';
import { BannedWordsController } from './banned_words.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannedWord } from './entities/banned_word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BannedWord])],
  controllers: [BannedWordsController],
  providers: [BannedWordsService],
})
export class BannedWordsModule {}
