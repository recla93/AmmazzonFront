import { Component } from '@angular/core';
import {ProdottoRepositoryService} from '../../services/prodotto-repository.service';
import {Prodotto} from '../../model/Prodotto';

@Component({
  selector: 'app-vetrina',
  imports: [],
  templateUrl: './vetrina.component.html',
  styleUrl: './vetrina.component.css'
})
export class VetrinaComponent
{
  prodotti:Prodotto[] = [];

  constructor(private pRepo:ProdottoRepositoryService)
  {
    pRepo.getAllProdotti().subscribe(resp=>this.prodotti=resp);
  }
}
