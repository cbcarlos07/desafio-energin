import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem } from 'src/app/shared/retorno.model';
import { environment } from 'src/environments/environment';
import { Imovel } from './imovel.model';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  private URL: string = environment.host
  constructor(private _http: HttpClient) {
    this.URL = `${this.URL}/api/imoveis`
  }

  create(data: Imovel): Observable<Mensagem>{
    return this._http.post<Mensagem>(this.URL, data)
  }

  read(): Observable<Imovel[]>{    
    return this._http.get<Imovel[]>(`${this.URL}`)
    
  }

  readId(id: number): Observable<Imovel>{
    return this._http.get<Imovel>(`${this.URL}/${id}`)
  }

  update(id: number, data: Imovel): Observable<Mensagem>{
    return this._http.put<Mensagem>(`${this.URL}/${id}`, data)
  }

  delete(id: number): Observable<Mensagem>{
    return this._http.delete<Mensagem>(`${this.URL}/${id}`)
  } 
}
