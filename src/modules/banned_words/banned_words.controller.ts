import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BannedWordsService } from './banned_words.service';
import { CreateBannedWordDto } from './dto/create-banned_word.dto';
import { UpdateBannedWordDto } from './dto/update-banned_word.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BannedWords API')
@Controller('banned-words')
export class BannedWordsController {
  constructor(private readonly bannedWordsService: BannedWordsService) {}

  @Post()
  create(@Body() createBannedWordDto: CreateBannedWordDto) {
    return this.bannedWordsService.create(createBannedWordDto);
  }

  @Get()
  findAll() {
    return this.bannedWordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannedWordsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBannedWordDto: UpdateBannedWordDto,
  ) {
    return this.bannedWordsService.update(+id, updateBannedWordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannedWordsService.remove(+id);
  }
}
