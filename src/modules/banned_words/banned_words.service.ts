import { Injectable } from '@nestjs/common';
import { CreateBannedWordDto } from './dto/create-banned_word.dto';
import { UpdateBannedWordDto } from './dto/update-banned_word.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BannedWord } from './entities/banned_word.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BannedWordsService {
  constructor(
    @InjectRepository(BannedWord)
    private readonly bannedWordRepository: Repository<BannedWord>,
  ) {}

  async create(createBannedWordDto: CreateBannedWordDto) {
    const newBannedWord = new BannedWord();
    newBannedWord.word = createBannedWordDto.word;
    newBannedWord.reason = createBannedWordDto.reason;

    const result = await this.bannedWordRepository.save(newBannedWord);
    return result;
  }

  async findAll() {
    return await this.bannedWordRepository.find();
  }

  async findOne(id: number) {
    return await this.bannedWordRepository.findOneBy({ id });
  }

  async update(id: number, updateBannedWordDto: UpdateBannedWordDto) {
    const bannedWord = await this.bannedWordRepository.findOneBy({ id });
    if (!bannedWord) {
      return `Banned word with ID ${id} not found`;
    }

    bannedWord.word = updateBannedWordDto.word;
    bannedWord.reason = updateBannedWordDto.reason;
    await this.bannedWordRepository.save(bannedWord);
    return bannedWord;
  }

  async remove(id: number) {
    const result = await this.bannedWordRepository.delete(id);

    return result.affected
      ? `Banned word with ID ${id} removed`
      : `Banned word not found`;
  }
}
