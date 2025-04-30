import { Component } from '@angular/core';
import {CarrelloRepositoryService} from '../../services/carrello-repository.service';
import {StatoCarrelloService} from '../../services/stato-carrello.service';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-carrello',
  imports: [
    CurrencyPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {

  constructor(public carrelloStato:StatoCarrelloService) {
  }
}
