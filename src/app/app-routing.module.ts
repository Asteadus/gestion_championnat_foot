import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsComponent } from './components/clubs/clubs.component';
import { GetOneClubComponent } from './components/clubs/get-one-club/get-one-club.component';

const routes: Routes = [
  { path:"", redirectTo:"clubs", pathMatch:"full"},
  { path:"clubs", component:ClubsComponent},
  { path:"club/:id", component:GetOneClubComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
