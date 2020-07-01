import { Component } from '@angular/core';

import { AlertasService } from './alertas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppAngular2!';
  foto: string = 'favicon.ico';
  desenvolvimento: string[] = ['Angular	2',	'JavaScript',	'TypeScript',	'HTML',	'CSS'];
  valor: string;
  
  constructor(private service: AlertasService){

  }

  enviarMsg(): void{
    this.service.msgAlerta();
  }

  valorPassado(valorPassado){
    this.valor = valorPassado;
  }
}
