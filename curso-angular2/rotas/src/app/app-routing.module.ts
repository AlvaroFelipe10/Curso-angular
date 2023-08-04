import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";


const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
      canActivate:[AuthGuard],
      canActivateChild:[CursosGard]
    },
    {  path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
      canActivate:[AuthGuard],
     // canActivateChild:[AlunosGard]
    },
   // { path: 'curso/:id', component: CursoDetalheComponent },
   // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate:[AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
