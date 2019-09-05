import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientInfo, WorkerRO } from './worker.dto';
import { WorkerService } from './worker.service';
import { ClientEntity } from '../client/client.entity';

@Resolver('worker')
export class WorkerResolver {

  constructor(private workerService: WorkerService) {

  }

  @Query()
  public test(): String {
    return 'test worker';
  }

  @Query()
  public async dropTable(@Args('table')table: string): Promise<any> {
    return this.workerService.dropTable(table);
  }

  @Query()
  public async clients(): Promise<ClientEntity[]> {
    return this.workerService.getAllClients();
  }

  @Query()
  public async clientsOf(@Args('option')option: ClientEntity): Promise<ClientEntity[]> {
    return this.workerService.getAllClients(option);
  }

  @Mutation()
  public async addChat(@Args('client')client: ClientInfo, @Args('mess') mess: String): Promise<WorkerRO> {
    return await this.workerService.addConversation(client, mess);

  }

}
