import { Component, OnInit } from '@angular/core';
import { Imovel } from './imovel.model';
import Swal from 'sweetalert2'
import { ImoveisService } from './imoveis.service';
@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css']
})
export class ImoveisComponent implements OnInit {
  imoveis: Imovel[] = []
  constructor(private _imoveisService: ImoveisService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAll()
    }, 500);
  }

  getAll(){
    this._imoveisService
        .read()
        .subscribe((response: Imovel[])=>{
          this.imoveis = response
        })
  }

  perguntaRemover(Imovel: Imovel){
    const id = Imovel.id || 0
    Swal.fire({
      title: 'Atenção?',
      text: `Deseja realmente remover ${Imovel.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, delete-o!',
      cancelButtonText: 'Não',
      preConfirm:  () => {
				const  r = this.remover(id)
				return r
			},
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          this.getAll()
        }, 500);
        Swal.fire(
          'Removido!',
          'Usuário removido com sucesso',
          'success'
        )
      }
    })
  }

  remover(Imovel: number){
    return new Promise((resolve, reject)=>{
			this._imoveisService
			.delete( Imovel )
			.subscribe(()=>{
        resolve(true)
      })
		})
  }

}
