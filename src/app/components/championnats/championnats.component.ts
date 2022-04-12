import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Championnat } from 'src/app/models/championnat.model';
import { ChampionnatService } from 'src/app/services/championnat.service';


@Component({
  selector: 'app-championnats',
  templateUrl: './championnats.component.html',
  styleUrls: ['./championnats.component.css']
})
export class ChampionnatsComponent implements OnInit {

  listChampionnats !: Championnat[];


  constructor(private service: ChampionnatService, private router: Router) {
    this.getChampionnats();
   }

  ngOnInit(): void {
  }

  getChampionnats(){
    this.service.getChampionnats().subscribe({
      next :championnat =>this.listChampionnats = championnat,
      error : err => alert("echec"),
      complete: () => console.log("complete")
    })
  }

  onDetails(championnat: Championnat){

    this.router.navigate(["championnat/", championnat.id])
  }
}
