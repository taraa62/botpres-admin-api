import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OperatorEntity } from './operator.entity';
import { Repository } from 'typeorm';
import { OperatorDTO, OperatorRO } from './operator.dto';

@Injectable()
export class OperatorService {

  constructor(@InjectRepository(OperatorEntity) private operationRepository: Repository<OperatorEntity>) {

  }

  public async getOperator(login: String): Promise<OperatorDTO> {
    return await this.operationRepository.findOne({ where: { login } });
  }

  public async getOperators(page: number): Promise<OperatorDTO[]> {
    return await this.operationRepository.find({
      take: 25, skip: 25 * (page - 1),
    });
  }

  public async createNewOperator(data: OperatorDTO): Promise<OperatorRO> {
    const { login } = data;

    let user = await this.operationRepository.findOne({ where: { login } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = await this.operationRepository.create(data);
    await this.operationRepository.save(user);
    return user;
  }

  public async deleteOperator({ id, login }): Promise<any> {
    const where: any = {};
    if (id) {
      where.id = id;
    }
    if (!id && login) {
      where.login = login;
    }
    if (where.id || where.login) {
      const user = await this.operationRepository.findOne({ where: where });
      if (!user) {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }
      return this.operationRepository.remove(user);

    }
    throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
  }

}
