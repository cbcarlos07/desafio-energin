import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

//import {throwError} from 'rxjs/operators'
import {ErrorHandler, Injectable, Injector, NgZone} from "@angular/core";
import {NotificationService} from "../shared/snackbar/notification.service";
import {LoginService} from "./../components/login/login.service";

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler{

    constructor(private ns: NotificationService,
                private injector : Injector,
                private zone: NgZone){
        super()
    }
    override handleError( errorResponse: HttpErrorResponse | any ){
        if( errorResponse instanceof HttpErrorResponse){
            const message = errorResponse.error.message
            this.zone.run(() => {
                switch (errorResponse.status){
                    case 401:
                        this.injector.get(LoginService).handleLogin()
                        break;
                    case 403:
                        this.ns.notify( message || 'Não autorizado' )
                        break;
                    case 404:
                        this.ns.notify( message || 'Recurso não enconbtrado. Verifique o console para mais detalhes' )
                        break
                }
            })

        }
        super.handleError(errorResponse)

    }
}