import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosComponent } from './alunos/alunos.component';
import { AuthService } from './login/auth.service';
import { AlunosModule } from './alunos/alunos.module';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { AlunosModule } from './alunos/alunos.module';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, PaginaNaoEncontradaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // CursosModule,
    // AlunosModule
  ],
  providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
