import { Module } from '@nestjs/common';
import { PendingMessagesService } from './pending_messages.service';
import { PendingMessagesController } from './pending_messages.controller';

@Module({
  controllers: [PendingMessagesController],
  providers: [PendingMessagesService],
})
export class PendingMessagesModule {}
