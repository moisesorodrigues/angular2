import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes: any[] = [
                  {id:1, nome:'Moisés'}, 
                  {id:2, nome:'Paula'},
                  {id:3, nome:'Marina'},
                  {id:4, nome:'Sofia'}];
  
  constructor() { }

  ngOnInit() {
  }

  save(index: number, nomes: any){
    return nomes.id;
  }

  atualizar(){
    this.nomes = [
                  {id:1, nome:'Moisés'}, 
                  {id:2, nome:'Paula'},
                  {id:3, nome:'Marina'},
                  {id:4, nome:'Sofia'},
                  {id:4, nome:'Miguel'}];
  }

}
