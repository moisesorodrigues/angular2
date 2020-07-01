import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  habilitarBotao:	boolean	=	false;
  valores: string[]	=	[];
  idade: number	=	0;
  
  constructor() { }

  ngOnInit() {
  }

  meuClick():void{
    console.log('Evento do click do botão');
  }

  digitou($event):void{
    console.log($event);
  }

  digitouValorTemplate(valor):void{
    console.log(valor);
  }

  validaSenha(valor:	string):	void{
    if(valor.length	>=5){
        this.habilitarBotao	=	true;
    }
    else{
        this.habilitarBotao	=	false;
    }
  }
  gravarSenha(senha):	void{
    alert('Senha gravada:' + senha);
  }

  adicionar(conteudo:	string): void{
    this.valores.push(conteudo);
  }

  verIdade(valor):	void{
    let	ano	=	new Date();
    this.idade = ano.getFullYear() - valor;
  }

}
