import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import {HighlightDirective} from './highlight.directive';
import {UnlessDirective} from './unless.directive';


import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from './recipes/recipe.service';

import {routing} from './app.routing';
import {ShoppingListModule} from './shopping-list/shopping-list.module';

import {CoreModule} from './core/core.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ShoppingListModule,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
