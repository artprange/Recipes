import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Bacon', 5),
    new Ingredient('Mayo', 3),
  ];

  constructor() {}

  ngOnInit() {}

  onIngredienteAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
