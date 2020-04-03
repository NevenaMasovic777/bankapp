import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  logout() {
    if(this.authService.isAuthenticated()){
    console.log("uspesno ste se izlogovali")
    this.authService.logout()
  } else{
    console.log("niste izlogovani")
  }
    
    // this.token = null;
    // localStorage.removeItem("token");
    // this.router.navigate(["login"]);
  }
}
