import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BodyComponent } from "../common/body/body.component";
import { BradcrumbComponent } from "../common/bradcrumb/bradcrumb.component";
import { FooterComponent } from "../common/footer/footer.component";
import { HeaderComponent } from "../common/header/header.component";
import { MenuComponent } from "../common/menu/menu.component";
import { UsersService } from "../components/users/users.service";
import { SnackbarComponent } from './snackbar/snackbar.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AuthInterceptor } from "../security/auth.interceptor";
export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
    declarations: [
        BodyComponent,
        BradcrumbComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        SnackbarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgxMaskModule.forRoot(),
    ],
    exports: [
        BodyComponent,
        BradcrumbComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SnackbarComponent,
        NgxMaskModule
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders<any>{
        return {
            ngModule: SharedModule,
            providers: [
                UsersService,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
            ]
        }
    }
  }

  /**
   * export class SharedModule {
  static forRoot(): ModuleWithProviders{
      return {
          ngModule: SharedModule,
          providers: [  ShoppingCartService,
                        RestaurantsService,
                        OrderService,
                        NotificationService,
                        LoginService,
                        LoggedInGuard,
                        LeaveOrderGuard,
                        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
                     ]
      }
  }
}
   */