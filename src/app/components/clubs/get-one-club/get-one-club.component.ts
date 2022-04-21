import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/models/club.model';
import { Rencontre } from 'src/app/models/rencontre.model';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-get-one-club',
  templateUrl: './get-one-club.component.html',
  styleUrls: ['./get-one-club.component.css']
})
export class GetOneClubComponent implements OnInit {

  id:number;
  club !: Club;



  constructor(route : ActivatedRoute, private service : ClubService, private router : Router) { 
    const param_id = route.snapshot.paramMap.get("id")
    this.id = param_id? parseInt(param_id) : -1 ;

    if(this.id && this.id > 0)
      service.getClub(this.id).subscribe({
        next : (club)=>this.club = club,
        error: (err) => {
          router.navigateByUrl("/clubs")}
      });
  }

  ngOnInit(): void {
  }

}
