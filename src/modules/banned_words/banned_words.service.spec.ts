import { Test, TestingModule } from '@nestjs/testing';
import { BannedWordsService } from './banned_words.service';

describe('BannedWordsService', () => {
  let service: BannedWordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannedWordsService],
    }).compile();

    service = module.get<BannedWordsService>(BannedWordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
