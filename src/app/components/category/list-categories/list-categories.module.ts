import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCategoriesRoutingModule } from './list-categories-routing.module';
import { ListCategoriesComponent} from './list-categories.component';


@NgModule({
  declarations: [ListCategoriesComponent],
  imports: [
    CommonModule,
    ListCategoriesRoutingModule
  ]
})
export class ListCategoriesModule { }
