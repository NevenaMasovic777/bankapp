import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AutorizationService {
  constructor() {}

  state = {
    token: null
  };

  setToken = token => {
    localStorage.setItem("token", token);
    this.state.token = token;
    console.log(this.state.token);
  };

  getToken = () => {
    const token = this.state.token
      ? this.state.token
      : localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  };

  authHeader = () => {
    if (this.getToken()) {
      return { Authorization: this.getToken() };
    } else {
      return {};
    }
  };
}
