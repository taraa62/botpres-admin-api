import { Query, Resolver } from '@nestjs/graphql';

@Resolver('message')
export class MessageResolver{

  @Query()
  public test():String{
    return 'test messanger'
  }
}
