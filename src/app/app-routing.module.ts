import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionnatsComponent } from './components/championnats/championnats.component';
import { GetOneChampionnatComponent } from './components/championnats/get-one-championnat/get-one-championnat.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { GetOneClubComponent } from './components/clubs/get-one-club/get-one-club.component';

const routes: Routes = [
  { path:"", redirectTo:"clubs", pathMatch:"full"},
  { path:"clubs", component:ClubsComponent},
  { path:"club/:id", component:GetOneClubComponent},
  { path:"championnats", component:ChampionnatsComponent},
  { path:"championnat/:id", component:GetOneChampionnatComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
