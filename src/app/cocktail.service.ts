import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  /*cocktailsList = [
    new Cocktail("Margarita", 11, "photo1.png"),
    new Cocktail("Mojito", 12, "photo2.png"),
    new Cocktail("Caïpinrinha", 9, "photo3.png"),
    new Cocktail("Punch club", 7, "photo4.png"),
    new Cocktail("Rhum Coco", 5, "photo4.png"),
    new Cocktail("Rhum Coco", 5, "photo4.png"),
  ];*/
  
  constructor() { }

  getCocktails(){
    return [
      new Cocktail("Margarita", 11, "photo1.png"),
      new Cocktail("Mojito", 12, "photo2.png"),
      new Cocktail("Caïpinrinha", 9, "photo3.png"),
      new Cocktail("Punch club", 7, "photo4.png"),
      new Cocktail("Rhum Coco", 5, "photo4.png"),
      new Cocktail("Rhum Coco", 5, "photo4.png"),
    ];
  }
}
