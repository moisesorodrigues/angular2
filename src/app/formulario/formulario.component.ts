import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contatos('Moisés', '98765-4321', 'angular2@angular2.com.br');
  
  constructor() { }

  ngOnInit() {
  }

  enviarDados(){
    alert(`Nome: ${this.contato.nome}`);
    alert(`Telefone: ${this.contato.telefone}`);
    alert(`Email: ${this.contato.email}`);
  }

}
