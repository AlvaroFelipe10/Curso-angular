import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type NewType = undefined;

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id!: string;

  constructor(private route: ActivatedRoute){
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {

  }

}