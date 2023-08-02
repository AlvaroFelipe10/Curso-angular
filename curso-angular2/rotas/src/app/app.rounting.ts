import { RouterModule, Routes } from "@angular/router";
import { CursosComponent } from "./cursos/cursos.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
