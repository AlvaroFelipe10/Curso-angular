import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  constructor(){ }

  livro:any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd Edition',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co.glqjpRP'
  };

  livros: string[] = ['Java', 'Angular'];

  filtro!: string;

  addCurso(valor: string){
    this.livros.push(valor);
  }

  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
       v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2000)
  .pipe(
    map(valor => 'Valor assíncrono 2')
  );

  ngOnInit(): void {

  }

}
