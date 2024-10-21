import { Injectable } from '@nestjs/common';
import { CreateDailyMessageDto } from './dto/create-daily_message.dto';
import { UpdateDailyMessageDto } from './dto/update-daily_message.dto';

@Injectable()
export class DailyMessagesService {
  create(createDailyMessageDto: CreateDailyMessageDto) {
    return 'This action adds a new dailyMessage';
  }

  findAll() {
    return `This action returns all dailyMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyMessage`;
  }

  update(id: number, updateDailyMessageDto: UpdateDailyMessageDto) {
    return `This action updates a #${id} dailyMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyMessage`;
  }
}
