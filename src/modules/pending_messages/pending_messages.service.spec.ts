import { Test, TestingModule } from '@nestjs/testing';
import { PendingMessagesService } from './pending_messages.service';

describe('PendingMessagesService', () => {
  let service: PendingMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PendingMessagesService],
    }).compile();

    service = module.get<PendingMessagesService>(PendingMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
