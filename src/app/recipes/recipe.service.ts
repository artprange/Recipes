import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'Test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1280px-Hamburger_%28black_bg%29.jpg'
    ),
    new Recipe(
      'Another Test',
      'Test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1280px-Hamburger_%28black_bg%29.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
