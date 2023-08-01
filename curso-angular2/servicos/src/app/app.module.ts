import { CursosService } from './cursos/cursos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';

import { FormsModule } from '@angular/forms';
import { CriarCursoModule } from "./criar-curso/criar-curso.module";
import { LogService } from './shared/log.service';


@NgModule({
    declarations: [
        AppComponent

    ],
  //  providers: [CursosService],
    providers:[LogService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CriarCursoModule,
        CursosModule
    ]
})
export class AppModule { }
