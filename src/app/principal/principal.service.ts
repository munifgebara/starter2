import {Injectable} from "@angular/core"
import {Http,HttpModule,JsonpModule} from "@angular/http"

import { Email } from './email';

@Injectable()
export class PrincipalService {

  private baseUrl = 'https://projeto-bc697.firebaseio.com';

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

getEmails() {
    return this.http.get(`${this.baseUrl}/email.json`)
      .toPromise()
      .then(response => this.convert(response.json()));
  }


 private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        codigo: id,
        nome: parsedResponse[id].nome,
        email: parsedResponse[id].email
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }


}


/*
{
	"-Kewp64ha7HNLbOEIAk8": {
		"email": "munifgebara@gmail.com",
		"nome": "Munif Gebara Junior"
	},
	"-KewpLlt3D6UcEusppuM": {
		"email": "dudagebara@gmail.com",
		"nome": "Duda Gebara"
	}
}
  CONVERT
[
  
	 {
    "id":"-KewpLlt3D6UcEusppuM",
		"email": "dudagebara@gmail.com",
		"nome": "Duda Gebara"},
	 {
    "id":"-Kewp64ha7HNLbOEIAk8", 
		"email": "munifgebara@gmail.com",
		"nome": "Munif Gebara Junior"
	}
	
]




*/
