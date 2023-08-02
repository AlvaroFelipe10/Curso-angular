import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos!: any[];
  pagina!: number;
  inscricao!: Subscription;

  constructor(
    private CursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();

   this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  proximaPagina(){

    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}});
  }
}
