import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChampionnatsComponent } from './components/championnats/championnats.component';
import { GetOneChampionnatComponent } from './components/championnats/get-one-championnat/get-one-championnat.component';
import { ClassementComponent } from './components/classement/classement.component';
import { GetOneClassementComponent } from './components/classement/get-one-classement/get-one-classement.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { GetOneClubComponent } from './components/clubs/get-one-club/get-one-club.component';
import { JourneesComponent } from './components/journees/journees.component';
import { GetOneRencontreComponent } from './components/rencontres/get-one-rencontre/get-one-rencontre.component';
import { RencontresComponent } from './components/rencontres/rencontres.component';
import { UpdateRencontreComponent } from './components/rencontres/update-rencontre/update-rencontre.component';

const routes: Routes = [
  { path:"", redirectTo:"accueil", pathMatch:"full"},
  { path:"accueil",component:AccueilComponent},
  { path:"clubs", component:ClubsComponent},
  { path:"club/:id", component:GetOneClubComponent},
  { path:"championnats", component:ChampionnatsComponent},
  { path:"championnat/:id", component:GetOneChampionnatComponent},
  { path:"rencontre", component:RencontresComponent, children:[
    { path:"update/:id", component:UpdateRencontreComponent},
    { path:":id", component:GetOneRencontreComponent},
    
  ]},
  
  { path:"journees", component:JourneesComponent, children:[
    { path:"update/:id", component:UpdateRencontreComponent},
    { path:":id", component:GetOneRencontreComponent},
    
  ]},

  /* { path:"classement", component:ClassementComponent}, */
  { path:"classement/:id", component:GetOneClassementComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
