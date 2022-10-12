import { Component, OnInit,AfterViewInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
declare const swiperInit: any;
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {

  cards : any = [];

  constructor(private __card:CardService)
  { }

  ngOnInit(): void {

    //console.log(this.__card.card_detail);
    this.cards = this.__card.card_detail;
  }

  ngAfterViewInit(): void {
    swiperInit();
  }

}
