import { Email } from './../principal/email';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'formulario',
  template: `
    <h1>Formulario</h1>
    <form novalidate (submit)="enviar(pessoa)" #formCadastro="ngForm">
      <label>Nome: </label><input type="text" [(ngModel)]="pessoa.nome" name="nome" required/>
      <label>E-mail: </label><input type="email" [(ngModel)]="pessoa.email" name="email" pattern=".+@.+" required #emailForm="ngModel"/>
      <button type="submit" [disabled]="formCadastro.invalid">Enviar</button>
      <br>
      <div [style.display]="!emailForm.pristine && emailForm.invalid ? 'block' : 'none'">Um email valido e necessario</div>
    </form>
  `,
  styles: [`
    input.ng-pristine { border: solid yellow 4px; }
    input.ng-dirty.ng-invalid { border: solid red 4px; }
    input.ng-dirty.ng-valid { border: solid green 4px; }
  `]
})
export class FormularioComponent {

  @Input() pessoa: Email;

  @Output() saida = new EventEmitter();

  constructor() {
    this.pessoa = {nome:"", email:""};
  }

  enviar(pessoa) {
    this.saida.emit(pessoa);
  }
}
