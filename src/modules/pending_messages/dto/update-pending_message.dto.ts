import { PartialType } from '@nestjs/swagger';
import { CreatePendingMessageDto } from './create-pending_message.dto';

export class UpdatePendingMessageDto extends PartialType(CreatePendingMessageDto) {}
