import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {HomeComponent} from './home.component';
import {HighlightDirective} from './highlight.directive';

@NgModule({
    declarations: [DropdownDirective, HomeComponent, HighlightDirective],
    exports: [DropdownDirective]
})
export class CoreModule{ }