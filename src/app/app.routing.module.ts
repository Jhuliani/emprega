import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const appRoutes: Routes = [
  {path: 'curriculums', loadChildren: () => import('../app/cadastros/cadastros.module').then(m => m.CadastrosModule), canActivate: [AuthGuard]  },
  {path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
