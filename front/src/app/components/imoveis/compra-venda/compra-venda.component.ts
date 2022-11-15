import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImoveisService } from '../imoveis.service';
import { Imovel } from '../imovel.model';
import { CompraVenda } from './compra-venda.model';
import { CompraVendaService } from './compra-venda.service';

@Component({
  selector: 'app-compra-venda',
  templateUrl: './compra-venda.component.html',
  styleUrls: ['./compra-venda.component.css']
})
export class CompraVendaComponent implements OnInit {
  id: number
  imovel: Imovel
  nome: string
  compras: CompraVenda[] = []
  constructor(private _imovelService: ImoveisService,
              private _compraVendaService: CompraVendaService,
              private _activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activateRouter.snapshot.params['id'] 
    setTimeout(() => {
      this.buscarImovel()     
      this.buscar() 
    }, 500);
  }

  buscarImovel(){
    this._imovelService
        .readId(this.id)
        .subscribe((resp: Imovel)=>{
          this.imovel = resp
          this.nome = this.imovel.name
        })
  }

  buscar(){
    this._compraVendaService
        .read(this.id)
        .subscribe((resp: CompraVenda[])=>{
          this.compras = resp
        })
  }



}
