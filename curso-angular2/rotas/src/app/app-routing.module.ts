import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";


const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
      canActivate:[AuthGuard],
      canActivateChild:[CursosGuard],
      canLoad:[AuthGuard]
    },
    {  path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
      canActivate:[AuthGuard],
      canLoad:[AuthGuard]
     // canActivateChild:[AlunosGard]
    },
   // { path: 'curso/:id', component: CursoDetalheComponent },
   // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
    { path: '', redirectTo:'/home', pathMatch:'full'},
    { path: '**', component:PaginaNaoEncontradaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
