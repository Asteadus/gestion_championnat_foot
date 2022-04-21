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
import { RencontresComponent } from './components/rencontres/rencontres.component';
import { JourneesComponent } from './components/journees/journees.component';
import { GetOneRencontreComponent } from './components/rencontres/get-one-rencontre/get-one-rencontre.component';
import { UpdateRencontreComponent } from './components/rencontres/update-rencontre/update-rencontre.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ClassementComponent } from './components/classement/classement.component';
import { GetOneClassementComponent } from './components/classement/get-one-classement/get-one-classement.component';
import { AdminComponent } from './components/admin/admin.component';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

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
    AccueilComponent,
    ClassementComponent,
    GetOneClassementComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
