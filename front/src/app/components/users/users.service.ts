import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { Mensagem } from 'src/app/shared/retorno.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private URL: string = environment.host
  constructor(private _http: HttpClient) {
    this.URL = `${this.URL}/api/users`
  }

  create(data: User): Observable<Mensagem>{
    return this._http.post<Mensagem>(this.URL, data)
  }

  read(): Observable<User[]>{    
    return this._http.get<User[]>(`${this.URL}`)
    
  }

  readId(id: number): Observable<User>{
    return this._http.get<User>(`${this.URL}/${id}`)
  }

  update(id: number, data: User): Observable<Mensagem>{
    return this._http.put<Mensagem>(`${this.URL}/${id}`, data)
  }

  delete(id: number): Observable<Mensagem>{
    return this._http.delete<Mensagem>(`${this.URL}/${id}`)
  }

  

  

}
