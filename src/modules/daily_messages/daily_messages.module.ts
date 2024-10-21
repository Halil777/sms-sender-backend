import { Module } from '@nestjs/common';
import { DailyMessagesService } from './daily_messages.service';
import { DailyMessagesController } from './daily_messages.controller';

@Module({
  controllers: [DailyMessagesController],
  providers: [DailyMessagesService],
})
export class DailyMessagesModule {}
