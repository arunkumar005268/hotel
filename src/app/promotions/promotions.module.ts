import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { NeovedaSpaComponent } from './neoveda-spa/neoveda-spa.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FoodBeverageComponent,
    NeovedaSpaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'foodBeverage',component:FoodBeverageComponent},
      {path:'neovedaSpa',component:NeovedaSpaComponent}
    ])
  ]
})
export class PromotionsModule { }
