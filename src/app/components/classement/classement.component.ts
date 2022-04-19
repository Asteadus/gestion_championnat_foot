import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classement } from 'src/app/models/classement.model';
import { ClassementService } from 'src/app/services/classement.service';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  listClassement !: Classement[];

  constructor(private classementService : ClassementService, private router : Router, private clubService : ClubService) { 
    this.getClassements();
    
  }

  ngOnInit(): void {
  }

  getClassements(){
    this.classementService.getClassements().subscribe({
      next :classement =>{
        console.log(classement),

        this.listClassement = classement
      },
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

}
