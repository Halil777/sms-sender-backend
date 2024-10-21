import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PendingMessagesService } from './pending_messages.service';
import { CreatePendingMessageDto } from './dto/create-pending_message.dto';
import { UpdatePendingMessageDto } from './dto/update-pending_message.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pending Messages API')
@Controller('pending-messages')
export class PendingMessagesController {
  constructor(
    private readonly pendingMessagesService: PendingMessagesService,
  ) {}

  @Post()
  create(@Body() createPendingMessageDto: CreatePendingMessageDto) {
    return this.pendingMessagesService.create(createPendingMessageDto);
  }

  @Get()
  findAll() {
    return this.pendingMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendingMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePendingMessageDto: UpdatePendingMessageDto,
  ) {
    return this.pendingMessagesService.update(+id, updatePendingMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendingMessagesService.remove(+id);
  }
}
