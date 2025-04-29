import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from './auth.service';

export const aggiungiTokenInterceptor: HttpInterceptorFn = (req, next) =>
{
  //abbiamo bisogno del servizio, ma questa è una funzione, non possiamo iniettarlo con il costruttore
  let auth = inject(AuthService);
  let token = auth.getToken();
  if(!token)
    return next(req);//va avanti, manda la request

  //sto aggiungendo token alla proprietà Authorization dell'header della request
  const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })


  return next(authReq);
};
