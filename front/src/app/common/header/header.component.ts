import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/components/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
  }
  
  getNome(){
    return localStorage.getItem('user')
  }

  sair(){
     this._loginService.logout() 
  }


}
