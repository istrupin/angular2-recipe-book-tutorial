import { Injectable } from '@angular/core';
import { Ingredient}  from '../shared/ingredient';
import { Recipe } from './recipe';
import { Headers, Http } from '@angular/http';


@Injectable()
export class RecipeService {
  recipes: Recipe[] = [ 
    new Recipe('Dummy','DummyDesc', 'http://rishte4u.com/themes/default/assets/images/DummyImage.jpg',[
      new Ingredient('apple', 2),
      new Ingredient('orange',1)
    ]),
    new Recipe('Dummy 2','DummyDesc 2', 'http://rishte4u.com/themes/default/assets/images/DummyImage.jpg',[])];
  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe:Recipe, newRecipe:Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post('https://recipebook-b5dcb.firebaseio.com/recipes.json', body, {headers:headers});
  }

  fetchData(){

  }

}
