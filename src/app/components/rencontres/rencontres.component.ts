import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rencontre } from 'src/app/models/rencontre.model';
import { RencontreService } from 'src/app/services/rencontre.service';

@Component({
  selector: 'app-rencontres',
  templateUrl: './rencontres.component.html',
  styleUrls: ['./rencontres.component.css']
})
export class RencontresComponent implements OnInit {

  listRencontres !: Rencontre[];
 



  constructor(private rencontreService : RencontreService, private router : Router) {
    this.getRencontres();
    rencontreService.$updated.subscribe(() => this.getRencontres());
    
   }

  ngOnInit(): void {
  }

  getRencontres(){
    this.rencontreService.getRencontres().subscribe({
      next :rencontre =>{
        this.listRencontres = rencontre
      },
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }
  scoreUpdate(scoreUpdateBoolean : boolean){
    if(scoreUpdateBoolean){
      this.getRencontres()
    }
    
  }


}
