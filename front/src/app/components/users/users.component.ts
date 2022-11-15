import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = []
  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAll()      
    }, 500);
  }

  getAll(){
    this._userService
        .read()
        .subscribe((response: User[])=>{
          this.users = response
        })
  }

  perguntaRemover(user: User){
    const id = user.id || 0
    Swal.fire({
      title: 'Atenção?',
      text: `Deseja realmente remover ${user.name}`,
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

  remover(user: number){
    return new Promise((resolve, reject)=>{
			this._userService
			.delete( user )
			.subscribe(()=>{
        resolve(true)
      })
		})
  }



}
