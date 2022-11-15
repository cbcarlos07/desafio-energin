import { Component, OnInit } from '@angular/core';
import { LoginService } from './components/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';

  constructor(private _loginService: LoginService){}
  
  ngOnInit(): void {
    
  }

  isLoggedIn(){
    return this._loginService.isLoggedIn()
  }


}
