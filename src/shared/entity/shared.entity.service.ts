import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusEntity } from './status.entity';
import { HookersEntity } from './hookers.entity';

@Injectable()
export class SharedEntityService {
  constructor(@InjectRepository(StatusEntity) private statusRepository: Repository<StatusEntity>,
              @InjectRepository(HookersEntity) private hookersRepository: Repository<HookersEntity>) {

    this.checkStatusDef().catch(er => `SharedEntityService => ${console.error(er)}`);
  }

  private async checkStatusDef(): Promise<any> {
    const defStatus = ['success', 'fail', 'other'];

    defStatus.map(async v => {
      const isCreate = await this.statusRepository.findOne({ where: { status: v } }).catch(er => null);
      if (!isCreate) {
        this.statusRepository.insert({ status: v });
      }
    });
  }

  public async getAllStatuses(): Promise<StatusEntity[]> {
    const res = await this.statusRepository.find().catch(er => []);
    return res;
  }

//create error!!!
  public async getIdHooker(name: string): Promise<HookersEntity> {
    const res: HookersEntity = await this.hookersRepository.findOne({ where: { name: name } }).catch(er => null);
    return res;
  }

  public async getHookers(): Promise<HookersEntity[]> {
    const res: HookersEntity[] = await this.hookersRepository.find().catch(er => null);
    return res;
  }

  public async selectHooker(name: string): Promise<any> {
    let res: HookersEntity = await this.hookersRepository.findOne({ where: { name: name } }).catch(er => null);
    let result: any;
    if (res) {
      result = await this.hookersRepository.update({ id: res.id }, { selected: ++res.selected });
    } else {
      const data = {
        name: name,
        selected: 1,
      };
      result = await this.hookersRepository.insert(data);
      result = Object.assign(data, result.raw[0]);
    }
    return res || result;
  }
}
