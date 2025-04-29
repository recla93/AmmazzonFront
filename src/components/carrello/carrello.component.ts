import { Component } from '@angular/core';
import {CarrelloRepositoryService} from '../../services/carrello-repository.service';

@Component({
  selector: 'app-carrello',
  imports: [],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {

  constructor(private carrelloRepo:CarrelloRepositoryService) {

    carrelloRepo.getCarrelloBrutto().subscribe();
  }
}
