import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards : any = [];
  all_cards : any = [];
  selected_card : number = 2;

  constructor(private __card:CardService) 
  { }


  ngOnInit(): void {

    //console.log(this.__card.card_detail);
    this.cards = this.__card.card_detail;
    this.all_cards = this.__card.all_cards;
  }


  swipe(index : number, card_id : number)
  {
    console.log('pinki=========',index, card_id, this.selected_card);
      //alert(index);

    let old_selected_card =   this.selected_card;
    this.selected_card  = index;
    let new_selected_card =   index;
    let card_diff = 0;
    console.log('pinki=========>>>',old_selected_card, new_selected_card);

    if(old_selected_card != new_selected_card)
    {
          if(new_selected_card > old_selected_card)
          {
              card_diff = (new_selected_card-old_selected_card);
          }
          else
          {
              card_diff = (old_selected_card-new_selected_card);
          }
    }

    let last_crad = this.cards[index];

    let last_card_index = this.indexOfObject(this.all_cards,"id", last_crad.id);

    if((last_card_index+1) > this.all_cards.length)
    {

      console.log('pinki');
          for(let i=1; i<card_diff; i++)
          {
              this.cards[index+1] = this.all_cards[last_card_index+1];
          }
    }  
  }


  indexOfObject (main_array : any, property : any, value : any) 
  {
    for (let i = 0, len = main_array.length; i < len; i++) {
      if (main_array[i][property] === value) return i;
    }
    return -1;
  }
  



  
}
