import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AutorizationService } from "./autorization.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  url: string;
  token: any;

  constructor(
    private http: HttpClient,
    private authService: AutorizationService
  ) {
    this.url = "http://45.32.157.171:8200/api/";
  }

  getToken(personal_id) {
    return this.http.post(`${this.url}login`, personal_id, {
      headers: this.authService.authHeader()
    });
  }

  getCredits() {
    return this.http
      .get(`${this.url}credit`, {
        headers: this.authService.authHeader()
      })
      .pipe(
        map(responseData => {
          const data = [];
          for (let credit in responseData) {
            data.push(...responseData[credit]);
          }
          console.log(data);
          return data;
        })
      );
  }

  getCredit(amount) {
    return this.http.post(`${this.url}credit`, amount, {
      headers: this.authService.authHeader()
    });
  }
}
