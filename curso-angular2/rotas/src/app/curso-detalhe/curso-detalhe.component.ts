import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

type NewType = undefined;

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id!: string;

  incricao!: Subscription;

  constructor(private route: ActivatedRoute){
   // this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.incricao = this.route.params.subscribe(
      (params: any) => { this.id = params['id'];
    }
    );
  }

  ngOnDestroy(): void {
    this.incricao.unsubscribe();
  }
}
