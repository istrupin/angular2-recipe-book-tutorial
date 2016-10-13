import { Injectable } from '@angular/core';
import { Ingredient}  from '../shared/ingredient';
import { Recipe } from './recipe';


@Injectable()
export class RecipeService {
  recipes: Recipe[] = [ 
    new Recipe('Dummy','DummyDesc', 'http://rishte4u.com/themes/default/assets/images/DummyImage.jpg',[
      new Ingredient('apple', 2),
      new Ingredient('orange',1)
    ]),
    new Recipe('Dummy 2','DummyDesc 2', 'http://rishte4u.com/themes/default/assets/images/DummyImage.jpg',[])];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

}
