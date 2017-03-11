import { Component } from '@angular/core';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'principal',
  templateUrl: 'principal.component.html',
  styleUrls: ['principal.component.css']
})
export class PrincipalComponent {

  mensagem:string;

  constructor(private principalService: PrincipalService) {
    this.mensagem=principalService.getMessagem();
  }
  

}
