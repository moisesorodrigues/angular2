import { Injectable } from '@angular/core';

@Injectable()
export class AlertasService {

  constructor() { }

  msgAlerta(): void{
    alert('Aplicativo Angular2');
  }

}
