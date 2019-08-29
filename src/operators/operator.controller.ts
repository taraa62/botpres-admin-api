import { Body, Controller, Get, Post } from '@nestjs/common';
import { OperatorDTO } from './operator.dto';

@Controller('api/operator')
export class OperatorController {

  @Get()
  private test(): string {
    return 'hello!!';
  }

  @Post('create')
  private create(@Body()body: OperatorDTO):OperatorDTO {

    console.log(body);

    return new OperatorDTO();
  }

}


