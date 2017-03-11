import { Email } from './email';
import { Component } from '@angular/core';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'principal',
  templateUrl: 'principal.component.html',
  styleUrls: ['principal.component.css']
})
export class PrincipalComponent {

  mensagem: string;
  emails: Email[];

  constructor(private principalService: PrincipalService) {
    this.mensagem = principalService.getMessagem();
    this.reload();
  }

  private reload() {
    return this.principalService.getEmails()
      .then(emails => this.emails = emails);
  }


}
