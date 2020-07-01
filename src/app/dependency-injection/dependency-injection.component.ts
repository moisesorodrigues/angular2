import { Component, OnInit } from '@angular/core';
import { NomesTecService } from './nomes-tec.service';
import { MeuLogService } from './meu-log.service';
import { AlertasService } from 'app/alertas.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],
  providers: [NomesTecService, MeuLogService]
})
export class DependencyInjectionComponent implements OnInit {

  tecnologias: string [] = [];

  constructor(private nomesTec: NomesTecService, private alerta: AlertasService) {
    this.tecnologias	=	nomesTec.getNomesTec();
    this.alerta.msgAlerta();
  }

  ngOnInit() {
  }

}
