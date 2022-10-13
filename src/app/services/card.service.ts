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
    {id:1, name: '', image: 'assets/images/card/s1.png'},
    {id:2, name: '', image: 'assets/images/card/s2.png'},
    {id:3, name: '', image: 'assets/images/card/s3.png'},
    {id:4, name: '', image: 'assets/images/card/s4.png'},
    {id:5, name: '', image: 'assets/images/card/s5.png'}
  ];


  
  constructor() { }
}
