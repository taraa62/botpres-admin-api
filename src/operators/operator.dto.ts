import { IsString } from 'class-validator';

export class OperatorDTO {

  @IsString()
  public readonly name: string;

  @IsString()
  public readonly lastname: string;

  @IsString()
  public readonly login: string;
}

export class OperatorRO {
  public name: string;

  public lastname: string;

  public login: string;
}
