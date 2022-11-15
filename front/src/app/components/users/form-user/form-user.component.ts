import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mensagem } from 'src/app/shared/retorno.model';
import { NotificationService } from 'src/app/shared/snackbar/notification.service';
import { CustomValidators } from '../password.validate';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  subtitle: string = "Cadastrar Usuário"
  inputPwd: boolean = false
  inputPwdRpt: boolean = false
  form: FormGroup
  id: number = 0
  
  constructor(private _userService: UsersService,
              private _location: Location,
              private _noticationService: NotificationService,
              private _activatedRouter: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this._activatedRouter.snapshot.params['id'] || 0
    
    this.form = new FormGroup({
      name: new FormControl('', {validators: [Validators.required]}),
      login: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.min(4)],}),
      confirmPassword: new FormControl('', {validators: [Validators.required]}),
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]
    )
    if( this.id > 0 ){
      this.subtitle = 'Atualizar Usuário'
      this.buscarUsuario()
    }
  }


  change(variable: string){
    if(variable === 'inputPwd'){
      this.inputPwd = !this.inputPwd
    }else {
      this.inputPwdRpt = !this.inputPwdRpt
    }
  }

  buscarUsuario(){
    this._userService
        .readId(this.id)
        .subscribe((response: User)=> {
          this.form.controls['name'].setValue( response.name ) 
          this.form.controls['login'].setValue( response.login ) 
        })
  }

  submit(){
    delete this.form.value.confirmPassword
    if(this.id > 0) this.atualizar()
    else this.novo()
  }

  novo(){
    this._userService
        .create( this.form.value )
        .subscribe( (response: Mensagem) =>{
          this._noticationService.notify(response.msg)
          this._location.back()
        } )
  }

  atualizar(){
    this._userService
        .update(this.id, this.form.value)
        .subscribe((response: Mensagem)=>{
          this._noticationService.notify(response.msg)
          this._location.back()
        })
  }

}
