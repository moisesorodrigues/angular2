import { Injectable, Optional } from '@angular/core';
import { MeuLogService }	from	'./meu-log.service';

@Injectable()
export class NomesTecService {

  constructor(@Optional() private meuLog:	MeuLogService) {

  }

  getNomesTec(): string[] {
    if(this.meuLog){
      this.meuLog.setLog('Obtendo valores do array do serviço NomesTecService');
    }
    return ['Angular2', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'];
  }

}
