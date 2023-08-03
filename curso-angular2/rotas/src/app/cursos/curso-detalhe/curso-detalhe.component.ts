import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

type NewType = undefined;

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id!: number;
  incricao!: Subscription;
  curso!: any;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private cursosService:CursosService
    ){
   // this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.incricao = this.route.params.subscribe(
      (params: any) => { this.id = params['id'];

      this.curso = this.cursosService.getCurso(this.id);

        if(this.curso == null){
          this.router.navigate(['/cursos/naoEncontrado']);
        }

    }
    );
  }

  ngOnDestroy(): void {
    this.incricao.unsubscribe();
  }
}
