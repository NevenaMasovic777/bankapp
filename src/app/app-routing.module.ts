import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService} from "./guards/auth-guard.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreditListComponent } from './credit-list/credit-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    
  },
  {
    path: "home",
    component: CreditListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
