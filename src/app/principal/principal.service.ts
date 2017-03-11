import {Injectable} from "@angular/core"
import {Http,HttpModule,JsonpModule} from "@angular/http"

@Injectable()
export class PrincipalService {

  private mensagem:string="Bom dia!";

  constructor(private http:Http){

  }
  
  getMessagem():string{
    return this.mensagem;
  }

}
