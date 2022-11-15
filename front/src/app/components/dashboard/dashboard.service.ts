import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dashboard } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL: string = environment.host
  constructor(private _http: HttpClient) {
    this.URL = `${this.URL}/api/dashboard`
  }

  getDashboard(): Observable<Dashboard>{
    return this._http.get<Dashboard>(this.URL)
  }
}
