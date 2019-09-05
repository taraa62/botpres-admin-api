import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller("kk")
export class WorkerController {



  // @EventPattern('addChat' )
  @MessagePattern({type:'addChat'} )
  public async addChat(data: any): Promise<any> {
    console.log('eeeeeeeee');
    return "ssssss"
  }

}
