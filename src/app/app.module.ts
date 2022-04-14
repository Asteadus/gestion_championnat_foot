import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { HttpClientModule } from '@angular/common/http';
import { GetOneClubComponent } from './components/clubs/get-one-club/get-one-club.component';
import { ChampionnatsComponent } from './components/championnats/championnats.component';
import { GetOneChampionnatComponent } from './components/championnats/get-one-championnat/get-one-championnat.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { RencontresComponent } from './components/rencontres/rencontres.component';
import { JourneesComponent } from './components/journees/journees.component';
import { GetOneRencontreComponent } from './components/rencontres/get-one-rencontre/get-one-rencontre.component';
import { UpdateRencontreComponent } from './components/rencontres/update-rencontre/update-rencontre.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    GetOneClubComponent,
    ChampionnatsComponent,
    GetOneChampionnatComponent,
    HeaderComponent,
    RencontresComponent,
    JourneesComponent,
    GetOneRencontreComponent,
    UpdateRencontreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
