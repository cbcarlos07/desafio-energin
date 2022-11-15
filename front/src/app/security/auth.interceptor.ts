import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable, Injector} from "@angular/core";
import {LoginService} from "./../components/login/login.service";
@Injectable()
export class  AuthInterceptor implements HttpInterceptor{

    constructor(private injector: Injector){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const loginService = this.injector.get(LoginService)
        if( loginService.isLoggedIn() ){
            const authRequest = request.clone(
                {setHeaders: {'x-access-token': `${loginService.accessToken()}`}} )
            return next.handle(authRequest)
        }else {
            return next.handle( request )
        }
    }
}