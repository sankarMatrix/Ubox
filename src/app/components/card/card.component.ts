import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards : any = [];

  constructor(private __card:CardService) 
  { }

  ngOnInit(): void {

    //console.log(this.__card.card_detail);
    this.cards = this.__card.card_detail;
  }

}
