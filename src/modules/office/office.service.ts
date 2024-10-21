import { Injectable } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Office } from './entities/office.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(Office)
    private readonly officeRepository: Repository<Office>,
  ) {}

  async create(createOfficeDto: CreateOfficeDto) {
    const newOffice = new Office();
    newOffice.name = createOfficeDto.name;
    newOffice.password = createOfficeDto.password;
    newOffice.phone_number = createOfficeDto.phoneNumber;
    newOffice.username = createOfficeDto.username;
    const result = await this.officeRepository.save(newOffice);
    return result;
  }

  async findAll() {
    const result = await this.officeRepository.find();
    return result.map((it) => ({
      ...it,
      password: undefined,
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} office`;
  }

  update(id: number, updateOfficeDto: UpdateOfficeDto) {
    return `This action updates a #${id} office`;
  }

  remove(id: number) {
    return `This action removes a #${id} office`;
  }
}
