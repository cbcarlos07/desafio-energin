import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL: string = environment.host
  constructor(private router: Router,
              private _http: HttpClient) {
    this.URL = `${this.URL}`
  }
  
  login(params: User): Observable<User>{
    return this._http.patch<User>(`${this.URL}/auth`, params)
               .pipe(tap((user: any) => {
                  localStorage.setItem('user', user.name)
                  localStorage.setItem('idUser', user.id)
                  localStorage.setItem('token', user.token)
               }))

}


  isLoggedIn(){
    return localStorage.getItem('user') != undefined
  }

  accessToken(){
    return localStorage.getItem('token')
  }

  handleLogin(){
    this.router.navigate(['/'])
  }

  logout(){
    localStorage.clear()
    this.handleLogin()
  }
}
