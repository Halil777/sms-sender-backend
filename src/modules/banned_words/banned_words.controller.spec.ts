import { Test, TestingModule } from '@nestjs/testing';
import { BannedWordsController } from './banned_words.controller';
import { BannedWordsService } from './banned_words.service';

describe('BannedWordsController', () => {
  let controller: BannedWordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannedWordsController],
      providers: [BannedWordsService],
    }).compile();

    controller = module.get<BannedWordsController>(BannedWordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
