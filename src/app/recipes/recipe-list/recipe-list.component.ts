import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [ 
    new Recipe('Dummy','DummyDesc', 'http://rishte4u.com/themes/default/assets/images/DummyImage.jpg',[]),
    new Recipe('Dummy 2','DummyDesc 2', 'http://rishte4u.com/themes/default/assets/images/DummyImage.jpg',[])];
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
