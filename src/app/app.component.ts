import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [RecipeService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
