import { Injectable } from '@angular/core';
import {CarrelloRepositoryService} from './carrello-repository.service';
import {Carrello} from '../model/Carrello';

@Injectable({
  providedIn: 'root'
})
export class StatoCarrelloService {

  carrello:Carrello |null=null;

  constructor(private carrelloRepo:CarrelloRepositoryService) {
    carrelloRepo.getCarrello().subscribe(res=>this.carrello=res);
  }

  addProduct(idProdotto:number)
  {
    this.carrelloRepo.addProd({idProdotto:idProdotto}).subscribe(res=>this.carrello=res);
  }
}
