import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private router: Router) {}

  helper = new JwtHelperService();

  state = {
    token: null
  };

  getToken = () => {
    const token = this.state.token
      ? this.state.token
      : localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  };

  login = token => {
    localStorage.setItem("token", token);
    this.state.token = token;
    console.log(this.state.token);
    this.router.navigate(["home"]);
  };

  isLogin = () => {
    return this.state.token || localStorage.getItem("token");
  };

  /** 
   @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem("token") != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }

  logout = () => {
    this.clear();
    this.router.navigate(["/login"]);
  };

  clear(): void {
    localStorage.clear();
  }

  authHeader = () => {
    if (this.getToken()) {
      return { Authorization: this.getToken() };
    } else {
      return {};
    }
  };
}
