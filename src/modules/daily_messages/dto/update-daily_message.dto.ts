import { PartialType } from '@nestjs/swagger';
import { CreateDailyMessageDto } from './create-daily_message.dto';

export class UpdateDailyMessageDto extends PartialType(CreateDailyMessageDto) {}
