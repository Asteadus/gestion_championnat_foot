import { Component, OnInit } from '@angular/core';
import { Journee } from 'src/app/models/journee.model';
import { ConnexionService } from 'src/app/services/connexion.service';
import { JourneeService } from 'src/app/services/journee.service';
import { RencontreService } from 'src/app/services/rencontre.service';

@Component({
  selector: 'app-journees',
  templateUrl: './journees.component.html',
  styleUrls: ['./journees.component.css']
})
export class JourneesComponent implements OnInit {

  listJournees !: Journee[];

  constructor(private journeeService : JourneeService, private rencontreService: RencontreService, private connexionService: ConnexionService) {
    this.getJournees()
    rencontreService.$updated.subscribe(() => this.getJournees());
    connexionService.$connected.subscribe(() => this.isConnected);
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
  isConnected(){
    return this.connexionService.isConnected;
  }

}
