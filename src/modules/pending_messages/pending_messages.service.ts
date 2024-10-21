import { Injectable } from '@nestjs/common';
import { CreatePendingMessageDto } from './dto/create-pending_message.dto';
import { UpdatePendingMessageDto } from './dto/update-pending_message.dto';

@Injectable()
export class PendingMessagesService {
  create(createPendingMessageDto: CreatePendingMessageDto) {
    return 'This action adds a new pendingMessage';
  }

  findAll() {
    return `This action returns all pendingMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pendingMessage`;
  }

  update(id: number, updatePendingMessageDto: UpdatePendingMessageDto) {
    return `This action updates a #${id} pendingMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} pendingMessage`;
  }
}
