import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FormImoveisComponent } from "./form-imoveis/form-imoveis.component";
import { ImoveisComponent } from "./imoveis.component";
import { CompraVendaComponent } from './compra-venda/compra-venda.component';
import { BuyFormComponent } from './compra-venda/buy-form/buy-form.component';



const ROUTES: Routes = [
    {path: '', component: ImoveisComponent},
    {path: 'cad', component: FormImoveisComponent},
    {path: 'edit/:id', component: FormImoveisComponent},
    {path: 'buy/:id', component: CompraVendaComponent},
    {path: 'buy-sell/:id', component: BuyFormComponent},
]

@NgModule({
    declarations: [ImoveisComponent, FormImoveisComponent, CompraVendaComponent, BuyFormComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class ImoveisModule{}