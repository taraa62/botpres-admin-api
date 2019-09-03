import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientInfo, WorkerRO } from './worker.dto';
import { WorkerService } from './worker.service';

@Resolver('worker')
export class WorkerResolver {

  constructor(private workerService: WorkerService) {

  }

  @Query()
  public test(): String {
    return 'test worker';
  }

  @Mutation()
  public async addChat(@Args("client")client: ClientInfo,@Args("mess") mess: String): Promise<WorkerRO> {
    return await this.workerService.addConversation(client, mess);

  }

}
