import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "../service/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  token: any;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      personal_id: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    });
  }

  login() {
    this.apiService.getToken(this.LoginForm.value).subscribe(res => {
      this.token = res;
      this.authService.login(this.token.token)
      // if (this.token.token) {
      //   this.authService.login(this.token.token);
      // }
    });
  }
}
