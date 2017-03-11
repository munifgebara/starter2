import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Email } from '../principal/email';


@Component({
  selector: 'lista',
  template: `
  <ul>
     <li *ngFor="let email of emails">nome:{{email.nome}} email:{{email.email}}
     <button type="button" (click)="deletaEmail(email.codigo)">Deletar</button>
     <button type="button" (click)="selecionaEmailTemplate(email)">Seleciona</button>
     </li>
  </ul> 
  `
})
export class ListaComponent {

    @Input() emails:Email[]; 

    @Output("deleta") deleta = new EventEmitter();

    @Output("seleciona") seleciona = new EventEmitter();

    deletaEmail(codigo) {
      this.deleta.emit(codigo);
    }

    selecionaEmailTemplate(email) {
      this.seleciona.emit(email);
    }

}
