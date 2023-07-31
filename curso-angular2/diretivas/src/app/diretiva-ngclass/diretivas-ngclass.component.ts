import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretivas-ngclass.component.html',
  styleUrls: ['./diretivas-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

}
