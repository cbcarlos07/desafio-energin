import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensagem } from 'src/app/shared/retorno.model';
import { environment } from 'src/environments/environment';
import { CompraVenda } from './compra-venda.model';

@Injectable({
  providedIn: 'root'
})
export class CompraVendaService {

  private URL: string = environment.host
  constructor(private _http: HttpClient) {
    this.URL = `${this.URL}/buy-sell`
  }

  create(compraVenda: CompraVenda): Observable<Mensagem>{
    return this._http.post<Mensagem>(this.URL, compraVenda)
  }

  read(id: number): Observable<CompraVenda[]>{
      return this._http.get<CompraVenda[]>(`${this.URL}/${id}`)
  }
}
