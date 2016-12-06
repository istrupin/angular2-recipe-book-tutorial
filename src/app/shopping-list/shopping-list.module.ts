import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {ShoppingListAddComponent} from '../shopping-list/shopping-list-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [ShoppingListComponent, ShoppingListAddComponent],
    imports: [FormsModule, CommonModule]

})
export class ShoppingListModule{ }