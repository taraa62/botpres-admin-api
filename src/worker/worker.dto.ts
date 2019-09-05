export enum TypeMessanger {
  TELEGRAM,
  WEB,
  VIBER,
  WHATSAPP,
  FACEBOOK

}

export class ClientInfo {
  public name: String;
  public lastname: String;
  public email: String;
  public phone: String;
  public typeMessanger: TypeMessanger;
  public messangerID:String;
  public operatorLogin:String;
  public selectGirl: String;
  public statusEnd: String;
}


export class WorkerRO {

  public isNewUser:Boolean;
  public isCreate:Boolean;
}
