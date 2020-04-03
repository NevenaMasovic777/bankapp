import { Component, OnInit } from "@angular/core";
import { AuthService} from "../service/auth.service";
import { ApiService } from "../service/api.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-credit-list",
  templateUrl: "./credit-list.component.html",
  styleUrls: ["./credit-list.component.css"]
})
export class CreditListComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  token = this.authService.state.token;
  credits = [];
  ApplyForm: FormGroup;

  p: number = 1;

  ngOnInit(): void {
    this.ApplyForm = new FormGroup({
      amount: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    });
    this.apiService.getCredits().subscribe(res => {
      this.credits = res;
      console.log(this.credits);
    });
  }

  apply() {
    this.apiService.getCredit(this.ApplyForm.value).subscribe(res => {
      this.apiService.getCredits().subscribe(res => {
        this.credits = res;
      });
    });
    this.ApplyForm.reset()
    console.log(this.ApplyForm.value);
  }


}
