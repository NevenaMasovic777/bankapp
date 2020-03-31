import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "../service/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AutorizationService } from "../service/autorization.service";

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
    private authService: AutorizationService,
    private route: ActivatedRoute,
    private router: Router
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
      if (this.token.token) {
        console.log(this.token);
        this.authService.setToken(this.token.token);
        this.router.navigate(["home"]);
      } else {
        this.router.navigate([""]);
      }
    });
    console.log(this.LoginForm.value);
  }
}
