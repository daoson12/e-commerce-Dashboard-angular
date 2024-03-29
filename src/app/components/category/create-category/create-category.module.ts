import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCategoryRoutingModule } from './create-category-routing.module';
import { CreateCategoryComponent } from './create-category.component';


@NgModule({
  declarations: [CreateCategoryComponent],
  imports: [
    CommonModule,
    CreateCategoryRoutingModule
  ]
})
export class CreateCategoryModule { }
