import { Test, TestingModule } from '@nestjs/testing';
import { PendingMessagesController } from './pending_messages.controller';
import { PendingMessagesService } from './pending_messages.service';

describe('PendingMessagesController', () => {
  let controller: PendingMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PendingMessagesController],
      providers: [PendingMessagesService],
    }).compile();

    controller = module.get<PendingMessagesController>(PendingMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
