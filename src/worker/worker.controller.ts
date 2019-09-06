import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { WorkerService } from './worker.service';

@Controller("kk")
export class WorkerController {


  constructor(private workerService: WorkerService) {

  }



  @EventPattern('addChat' )
  // @MessagePattern({type:'addChat'} )
  public async addChat(data: any): Promise<any> {
    console.log('eeeeeeeee');
    this.workerService.addConversation(data.client, data.message);
  }

}
