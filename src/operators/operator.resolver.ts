import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OperatorDTO, OperatorRO } from './operator.dto';
import { OperatorService } from './operator.service';

@Resolver('Operator')
export class OperatorResolver {

  constructor(private operatService: OperatorService) {

  }

  @Query()
  public async operator(@Args('login')login: string): Promise<OperatorDTO> {
    return await this.operatService.getOperator(login);
  }
//create validation for page<=0
  @Query()
  public async operators(@Args('page')page: number): Promise<OperatorDTO[]> {
    return await this.operatService.getOperators(page);
  }

  @Mutation()
  private async create(@Args()data: OperatorDTO, @Context()operator) {
    return await this.operatService.createNewOperator(data);
  }

  @Mutation()
  private async delete(@Args()data):Promise<any>{
    return await this.operatService.deleteOperator(data);
  }

}
