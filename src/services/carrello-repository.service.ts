import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrelloRepositoryService {

  constructor(private http:HttpClient) { }

  getCarrelloBrutto()
  {
    return this.http.get('/api/carts/mine');
  }
}
