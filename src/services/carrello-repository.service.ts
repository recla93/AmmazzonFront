import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Carrello} from '../model/Carrello';

interface AddProductDto {
  idProdotto:number
}

@Injectable({
  providedIn: 'root'
})
export class CarrelloRepositoryService {

  constructor(private http:HttpClient) { }

  getCarrello()
  {
    return this.http.get<Carrello>('/api/carts/mine');
  }

  addProd(dto:AddProductDto)
  {
    return this.http.post<Carrello>('/api/carts/add',dto);
  }
}
