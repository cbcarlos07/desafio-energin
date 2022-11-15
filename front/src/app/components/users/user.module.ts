import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { UsersComponent } from "./users.component";
import { FormUserComponent } from './form-user/form-user.component';


const ROUTES: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'cad',
        component: FormUserComponent
    },
    {
        path: 'edit/:id',
        component: FormUserComponent
    }
   
]


@NgModule({
    declarations: [UsersComponent, FormUserComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class UserModule{}