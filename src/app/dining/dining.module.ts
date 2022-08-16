import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsianComponent } from './asian/asian.component';
import { IndianComponent } from './indian/indian.component';
import { WorldComponent } from './world/world.component';
import { PastryComponent } from './pastry/pastry.component';
import { PrivilagecardComponent } from './privilagecard/privilagecard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AsianComponent,
    IndianComponent,
    WorldComponent,
    PastryComponent,
    PrivilagecardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      
      { path: 'asian', component: AsianComponent },
      {path:'indian',component:IndianComponent},
      {path:'pastry',component:PastryComponent},
      {path:'world',component:WorldComponent},
      {path:'privilagecard',component:PrivilagecardComponent}
      
  
    ]),
  
  ],
  
})
export class DiningModule { }
