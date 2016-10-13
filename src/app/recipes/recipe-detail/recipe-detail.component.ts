import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from "../recipe";
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  selectedRecipe: Recipe;
  private recipeIndex: number;

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  constructor(private sls: ShoppingListService, private route: ActivatedRoute, private recipesService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any)=> {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
