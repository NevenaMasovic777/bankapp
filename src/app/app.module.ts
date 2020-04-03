import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CreditListComponent } from "./credit-list/credit-list.component";
import { SingleCreditComponent } from "./credit-list/single-credit/single-credit.component";
import { NgxPaginationModule } from "ngx-pagination";
import { AuthGuardService } from "./guards/auth-guard.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CreditListComponent,
    SingleCreditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
