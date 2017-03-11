import { Component,Input } from '@angular/core';

import { Email } from '../principal/email';


@Component({
  selector: 'lista',
  template: `
  <ul>
     <li *ngFor="let email of emails">nome:{{email.nome}} email:{{email.email}}</li>
  </ul> 
  
  `
})
export class ListaComponent {

    @Input() emails:Email[]; 

}
