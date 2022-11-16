import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mensagem } from 'src/app/shared/retorno.model';
import { NotificationService } from 'src/app/shared/snackbar/notification.service';
import { ImoveisService } from '../../imoveis.service';
import { Imovel } from '../../imovel.model';
import { CompraVendaService } from '../compra-venda.service';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {
  form: FormGroup
  subtitle: string = 'Compra ou Venda'
  nome: string
  imovel: Imovel
  id: number
  constructor(private _buyService: CompraVendaService,
              private _imovelService: ImoveisService,
              private _activateRouter: ActivatedRoute,
              private _location: Location,
              private _notificationService: NotificationService) { }

  ngOnInit(): void {
    this.id = this._activateRouter.snapshot.params['id']
    this.form = new FormGroup({
      usuario: new FormControl(undefined, {validators: [Validators.required]}),
      imovel: new FormControl(Number(this.id), {validators: [Validators.required]}),
      value: new FormControl(undefined, {validators: [Validators.required]}),
      cliente: new FormControl(undefined, {validators: [Validators.required]}),
      acao: new FormControl(undefined, {validators: [Validators.required]}),
    })

    this.buscarImovel()
    this.getIdUser()
  }

  submit(){
    this._buyService.create(this.form.value)
        .subscribe((resp: Mensagem)=>{
          this._notificationService.notify(resp.msg)
          this._location.back()
        })
  }

  getIdUser(){
    const idUser = localStorage.getItem('idUser')
    this.form.controls['usuario'].setValue( idUser )
  }

  buscarImovel(){
    this._imovelService
        .readId(this.id)
        .subscribe((resp: Imovel)=>{
          this.imovel = resp
          this.nome = this.imovel.name
          this.form.controls['value'].setValue( this.imovel.value )
        })
  }

}
