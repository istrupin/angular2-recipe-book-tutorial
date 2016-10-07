import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

}
