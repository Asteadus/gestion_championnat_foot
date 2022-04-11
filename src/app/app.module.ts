import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { HttpClientModule } from '@angular/common/http';
import { GetOneClubComponent } from './components/clubs/get-one-club/get-one-club.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    GetOneClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
