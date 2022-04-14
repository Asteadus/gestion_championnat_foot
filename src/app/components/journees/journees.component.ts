import { Component, OnInit } from '@angular/core';
import { Journee } from 'src/app/models/journee.model';
import { JourneeService } from 'src/app/services/journee.service';

@Component({
  selector: 'app-journees',
  templateUrl: './journees.component.html',
  styleUrls: ['./journees.component.css']
})
export class JourneesComponent implements OnInit {

  listJournees !: Journee[];

  constructor(private journeeService : JourneeService) {
    this.getRencontres()
   }

  ngOnInit(): void {
  }

  getRencontres(){
    this.journeeService.getRencontres().subscribe({
      next :journee =>{
        this.listJournees = journee
      },
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }
}
