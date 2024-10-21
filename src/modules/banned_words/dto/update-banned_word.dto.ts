import { PartialType } from '@nestjs/swagger';
import { CreateBannedWordDto } from './create-banned_word.dto';

export class UpdateBannedWordDto extends PartialType(CreateBannedWordDto) {}
