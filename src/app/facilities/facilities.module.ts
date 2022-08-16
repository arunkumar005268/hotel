import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeovedaComponent } from './neoveda/neoveda.component';
import { SwimmingComponent } from './swimming/swimming.component';
import { CraftComponent } from './craft/craft.component';
import { BusinessComponent } from './business/business.component';
import { TravelComponent } from './travel/travel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NeovedaComponent,
    SwimmingComponent,
    CraftComponent,
    BusinessComponent,
    TravelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
     { path:'neoveda',component:NeovedaComponent},
     {path:'swimming',component:SwimmingComponent},
     {path:'craft',component:CraftComponent},
     {path:'business',component:BusinessComponent},
     {path:'travel',component:TravelComponent}
    ])
  ]
})
export class FacilitiesModule { }
