import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SharedEntityService } from './shared.entity.service';
import { StatusEntity } from './status.entity';

@Resolver('shared.entity')
export class SharedEntityResolver {

  constructor(private sharedService: SharedEntityService) {

  }

  @Query()
  public async statuses(): Promise<StatusEntity[]> {
    return await this.sharedService.getAllStatuses();
  }

  @Query()
  public async getHooker(@Args('name') name: string): Promise<any> {
    return this.sharedService.getIdHooker(name);
  }
  @Query()
  public async getHookers(): Promise<any> {
    return this.sharedService.getHookers();
  }

  @Mutation()
  public async selectedHooker(@Args('name') name: string): Promise<any> {
    return this.sharedService.selectHooker(name);
  }
}
