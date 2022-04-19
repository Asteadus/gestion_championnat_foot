import { Component, OnInit } from '@angular/core';
import { Journee } from 'src/app/models/journee.model';
import { JourneeService } from 'src/app/services/journee.service';
import { RencontreService } from 'src/app/services/rencontre.service';

@Component({
  selector: 'app-journees',
  templateUrl: './journees.component.html',
  styleUrls: ['./journees.component.css']
})
export class JourneesComponent implements OnInit {

  listJournees !: Journee[];

  constructor(private journeeService : JourneeService, private rencontreService: RencontreService) {
    this.getJournees()
    rencontreService.$updated.subscribe(() => this.getJournees());
   }

  ngOnInit(): void {
  }

  getJournees(){
    this.journeeService.getJournees().subscribe({
      next :journee =>{
        this.listJournees = journee
      },
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }
}
