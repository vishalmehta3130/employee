import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private AuthenticationService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.AuthenticationService.isLoggedIn()) {
            const authToken = this.AuthenticationService.getAuthorizationToken();
            req = req.clone({
                setHeaders:
                    { Authorization: authToken }
                }
            );
        }
        
        return next.handle(req);
    }
}
