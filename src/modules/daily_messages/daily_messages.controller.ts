import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DailyMessagesService } from './daily_messages.service';
import { CreateDailyMessageDto } from './dto/create-daily_message.dto';
import { UpdateDailyMessageDto } from './dto/update-daily_message.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Daily Messages API')
@Controller('daily-messages')
export class DailyMessagesController {
  constructor(private readonly dailyMessagesService: DailyMessagesService) {}

  @Post()
  create(@Body() createDailyMessageDto: CreateDailyMessageDto) {
    return this.dailyMessagesService.create(createDailyMessageDto);
  }

  @Get()
  findAll() {
    return this.dailyMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDailyMessageDto: UpdateDailyMessageDto,
  ) {
    return this.dailyMessagesService.update(+id, updateDailyMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyMessagesService.remove(+id);
  }
}
