import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // card_detail: any = [
  //   {name: 'Card 1', image: 'assets/images/card/image1.jpg', display:'block', class:'card-div'},
  //   {name: 'Card 2', image: 'assets/images/card/image2.jpg', display:'block', class:'card-div'},
  //   {name: 'Card 3', image: 'assets/images/card/image3.jpg', display:'block', class:'selected-card-div'},
  //   {name: 'Card 4', image: 'assets/images/card/image4.jpg', display:'block', class:'card-div'},
  //   {name: 'Card 5', image: 'assets/images/card/image5.jpg', display:'block', class:'card-div'},
  //   {name: 'Card 6', image: 'assets/images/card/image6.jpg', display:'none', class:'card-div'},
  //   {name: 'Card 7', image: 'assets/images/card/image7.jpg', display:'none', class:'card-div'},
  //   {name: 'Card 8', image: 'assets/images/card/image8.jpg', display:'none', class:'card-div'},
  //   {name: 'Card 9', image: 'assets/images/card/image9.jpg', display:'none', class:'card-div'},
  //   {name: 'Card 10', image: 'assets/images/card/image10.jpg', display:'none', class:'card-div'},
  // ];

  card_detail: any = [
    {id:1, name: 'Card 1', image: 'assets/images/card/image1.jpg'},
    {id:2, name: 'Card 2', image: 'assets/images/card/image2.jpg'},
    {id:3, name: 'Card 3', image: 'assets/images/card/image3.jpg'},
    {id:4, name: 'Card 4', image: 'assets/images/card/image4.jpg'},
    {id:5, name: 'Card 5', image: 'assets/images/card/image5.jpg'}
  ];


  all_cards: any = [
    {id:1, name: 'Card 1', image: 'assets/images/card/image1.jpg'},
    {id:2, name: 'Card 2', image: 'assets/images/card/image2.jpg'},
    {id:3, name: 'Card 3', image: 'assets/images/card/image3.jpg'},
    {id:4, name: 'Card 4', image: 'assets/images/card/image4.jpg'},
    {id:5, name: 'Card 5', image: 'assets/images/card/image5.jpg'},
    {id:6, name: 'Card 6', image: 'assets/images/card/image6.jpg'},
    {id:7, name: 'Card 7', image: 'assets/images/card/image7.jpg'},
    {id:8, name: 'Card 8', image: 'assets/images/card/image8.jpg'},
    {id:9, name: 'Card 9', image: 'assets/images/card/image9.jpg'},
    {id:10, name: 'Card 10', image: 'assets/images/card/image10.jpg'},
  ];

  constructor() { }
}
