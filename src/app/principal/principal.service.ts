import {Injectable} from "@angular/core"
import {Http,HttpModule,JsonpModule} from "@angular/http"

import { Email } from './email';

@Injectable()
export class PrincipalService {

  private mensagem:string="Bom dia!!!!";

  constructor(private http:Http){

  }
  
  getMessagem():string{
    return this.mensagem;
  }

  getEmailsMock():Email[]{
    return [
      {
        nome:"Suporte",
        email:"suporte@munif.com.br"
      },
      {
        nome:"Carmona",
        email:"reprova@munif.com.br"
      }
    ];
  }

}
