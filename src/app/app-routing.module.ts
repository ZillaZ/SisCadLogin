import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "cadastro",
    pathMatch: "full"
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "cadastro",
    component:CadastroComponent
  },
  {
  path: "login",
  component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
