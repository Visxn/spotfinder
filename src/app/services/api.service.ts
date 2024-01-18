import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  
  loginPath: string = 'https://accounts.spotify.com/api/token';
  basePath: string = 'https://api.spotify.com/v1';
  private clientId = '99715957815f4a0b9aa02e4ed9f1f965';
  private clientSecret = 'b4216585e4a447d880dc1627800d0424';
  accessToken: string = '';
  headers: HttpHeaders = new HttpHeaders({});

  constructor(private http: HttpClient) {
    this.spotifyLogin();
  }

  private spotifyLogin() {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
    };
    const body = 'grant_type=client_credentials';
    this.http.post(this.loginPath, body, { headers }).subscribe((data: any) => {
      localStorage.setItem('token', data.access_token);
      this.accessToken = 'Bearer ' + data.access_token;
      this.headers = this.headers.set('Authorization', this.accessToken);
    });
  }

  get(url: string) {
    return this.http.get(`${this.basePath}/${url}`, { headers: this.headers });
  }

  post(url: string, body: any) {
    return this.http.post(`${this.basePath}/${url}`, body, { headers: this.headers });
  }

  delete(url: string) {

  }
}
