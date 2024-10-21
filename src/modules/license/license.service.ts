import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLicenseDto } from './dto/create-license.dto';
import { UpdateLicenseDto } from './dto/update-license.dto';
import { License } from './entities/license.entity';

@Injectable()
export class LicenseService {
  constructor(
    @InjectRepository(License)
    private readonly licenseRepository: Repository<License>,
  ) {}

  async create(createLicenseDto: CreateLicenseDto): Promise<License> {
    const newLicense = this.licenseRepository.create(createLicenseDto);
    return this.licenseRepository.save(newLicense);
  }

  async findAll(): Promise<License[]> {
    return this.licenseRepository.find();
  }

  async findOne(id: number): Promise<License> {
    return this.licenseRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateLicenseDto: UpdateLicenseDto,
  ): Promise<License> {
    await this.licenseRepository.update(id, updateLicenseDto);
    return this.findOne(id); // Returning the updated license
  }

  async remove(id: number): Promise<void> {
    await this.licenseRepository.delete(id);
  }
}
