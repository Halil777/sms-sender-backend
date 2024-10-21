import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const newClient = new Client();
    newClient.name = createClientDto.name;
    newClient.client_name = createClientDto.client_name;
    newClient.phone_count = createClientDto.phone_count;
    newClient.usage_period = createClientDto.usage_period;
    newClient.status = createClientDto.status;
    newClient.client_password = createClientDto.client_password;
    const result = await this.clientRepository.save(newClient);
    return result;
  }

  async findAll() {
    return await this.clientRepository.find();
  }

  async findOne(id: number) {
    return await this.clientRepository.findOneBy({ id });
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findOneBy({ id });
    if (!client) {
      return `Client with ID ${id} not found`;
    }

    client.name = updateClientDto.name;
    client.client_name = updateClientDto.client_name;
    client.phone_count = updateClientDto.phone_count;
    client.usage_period = updateClientDto.usage_period;
    client.status = updateClientDto.status;
    client.client_password = updateClientDto.client_password;

    return await this.clientRepository.save(client);
  }

  async remove(id: number) {
    const result = await this.clientRepository.delete(id);
    return result.affected
      ? `Client with ID ${id} removed`
      : `Client not found`;
  }
}
