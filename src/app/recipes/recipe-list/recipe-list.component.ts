import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy','DummyDesc', 'http://rishte4u.com/themes/default/assets/images/DummyImage.jpg')
  constructor() { }

  ngOnInit() {
  }

}
