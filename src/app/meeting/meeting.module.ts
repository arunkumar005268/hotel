import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrestComponent } from './crest/crest.component';
import { CompanyReviewsComponent } from './company-reviews/company-reviews.component';
import { ConclaveComponent } from './conclave/conclave.component';
import { GardenComponent } from './garden/garden.component';
import { BusinessCenterComponent } from './business-center/business-center.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CrestComponent,
    CompanyReviewsComponent,
    ConclaveComponent,
    GardenComponent,
    BusinessCenterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'crest',component:CrestComponent},
      {path:'companyReviews',component:CompanyReviewsComponent},
      {path:'conclave',component:ConclaveComponent},
      {path:'garden',component:GardenComponent},
      {path:'businessCenter',component:BusinessCenterComponent}

    ])
  ]
})
export class MeetingModule { }
