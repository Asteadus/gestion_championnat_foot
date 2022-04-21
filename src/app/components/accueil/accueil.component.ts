import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/models/club.model';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

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
}
