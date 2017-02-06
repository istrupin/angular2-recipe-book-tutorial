import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import {UnlessDirective} from './unless.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {routing} from './app.routing';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {RecipeService} from './recipes/recipe.service';
import { CoreModule } from "./core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    ShoppingListModule,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
