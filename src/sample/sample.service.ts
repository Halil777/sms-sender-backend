import { Injectable } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sample } from './entities/sample.entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample) private sampleRepository: Repository<Sample>,
  ) {}

  // shu funksia database-a insert edyar
  async create(createSampleDto: CreateSampleDto) {
    const newData = new Sample();
    newData.body = createSampleDto.body;
    newData.title = createSampleDto.title;
    return await this.sampleRepository.save(newData);
  }

  // bu funksiya hemmesini SELECT edyar
  async findAll() {
    const result = await this.sampleRepository.find();
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} sample`;
  }

  update(id: number, updateSampleDto: UpdateSampleDto) {
    return `This action updates a #${id} sample`;
  }

  remove(id: number) {
    return `This action removes a #${id} sample`;
  }
}
