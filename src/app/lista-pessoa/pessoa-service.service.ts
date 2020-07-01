import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomesPessoas: string[] = ['Moisés', 'Paula', 'Marina', 'Sofia', 'Mariangela'];
  
  constructor() { }

  getPessoas(): string[] {
    return this.nomesPessoas;
  }

  setPessoas(nome: string): void {
    this.nomesPessoas.push(nome);
  }

}
