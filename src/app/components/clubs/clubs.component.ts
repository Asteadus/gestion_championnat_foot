import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { Club } from 'src/app/models/club.model';
import { ChampionnatService } from 'src/app/services/championnat.service';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  listClub !: Club[];


  constructor(private clubService: ClubService,  private router: Router) { 
    this.getClubs()
    
  
  }
  

  ngOnInit(): void {
  }

  

  getClubs(){
    this.clubService.getClubs().subscribe({
      next :club =>{
        this.listClub = club
      },
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

  onDetails(club: Club){

    this.router.navigate(["club/", club.id])
  }

  onDetailsChampionnat(club: Club){
    
    this.router.navigate(["championnat/", club.championnat.id])
  }


}
