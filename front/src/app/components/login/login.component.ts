import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isError: boolean
  msgError: string
  constructor(private _loginService: LoginService,
              private _router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(undefined, {validators: [Validators.required]}),
      password: new FormControl(undefined, {validators: [Validators.required]})
    })
  }

  submit(){
    this._loginService
        .login(this.form.value)
        .subscribe((resp: User)=>{
           if( resp.status ){
             this._router.navigate(['/dashboard'])
           }else{
              this.isError = true
              this.msgError = resp.msg || ''
           }
        })
      }      
}
