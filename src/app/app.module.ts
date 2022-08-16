import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NavComponent } from './nav/nav.component';
import { SuperiorRoomsComponent } from './superior-rooms/superior-rooms.component';
import { DeluxeRoomsComponent } from './deluxe-rooms/deluxe-rooms.component';
import { ClubRoomsComponent } from './club-rooms/club-rooms.component';
import { ExecutiveSuitesComponent } from './executive-suites/executive-suites.component';
import { MetropolitanSuitesComponent } from './metropolitan-suites/metropolitan-suites.component';
import { DiningModule } from './dining/dining.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { MeetingModule } from './meeting/meeting.module';
import { PromotionsModule } from './promotions/promotions.module';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    RoomsComponent,
    NavComponent,
    SuperiorRoomsComponent,
    DeluxeRoomsComponent,
    ClubRoomsComponent,
    ExecutiveSuitesComponent,
    MetropolitanSuitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiningModule,
    FacilitiesModule,
    MeetingModule,
    PromotionsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/booking', pathMatch: 'full' },
      { path: 'booking', component: BookingComponent },
      { path: 'rooms', component: RoomsComponent },
      {path:'superiorRooms',component:SuperiorRoomsComponent},
      {path:'deluxeRooms',component:DeluxeRoomsComponent},
      {path:'clubRooms',component:ClubRoomsComponent},
      {path:'executiveSuites',component:ExecutiveSuitesComponent},
      {path:'metropolitanSuites',component: MetropolitanSuitesComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
