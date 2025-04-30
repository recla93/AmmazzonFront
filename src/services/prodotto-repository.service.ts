import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Prodotto} from '../model/Prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottoRepositoryService {

  constructor(private http:HttpClient) { }

  getAllProdotti()
  {
    return this.http.get<Prodotto[]>('/api/products');
  }
}
