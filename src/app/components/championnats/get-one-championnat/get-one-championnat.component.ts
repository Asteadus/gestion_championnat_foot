import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Championnat } from 'src/app/models/championnat.model';
import { ChampionnatService } from 'src/app/services/championnat.service';

@Component({
  selector: 'app-get-one-championnat',
  templateUrl: './get-one-championnat.component.html',
  styleUrls: ['./get-one-championnat.component.css']
})
export class GetOneChampionnatComponent implements OnInit {

  id : number;
  championnat !: Championnat;

  constructor(route : ActivatedRoute, private service : ChampionnatService, private router: Router ) {
    const param_id = route.snapshot.paramMap.get("id")
    this.id = param_id? parseInt(param_id) : -1 ;

    if(this.id && this.id > 0)
      service.getChampionnat(this.id).subscribe({
        next : (championnat)=>this.championnat = championnat,
        error: (err) => router.navigateByUrl("/")
      });
   }

  ngOnInit(): void {
  }

}
