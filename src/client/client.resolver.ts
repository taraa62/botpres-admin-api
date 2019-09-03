import { Query, Resolver } from '@nestjs/graphql';

@Resolver("client")
export class ClientResolver{


  @Query()
  public test():String{
    return 'test client'
  }
}
