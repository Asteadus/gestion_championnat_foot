import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rencontre } from 'src/app/models/rencontre.model';
import { RencontreService } from 'src/app/services/rencontre.service';

@Component({
  selector: 'app-get-one-rencontre',
  templateUrl: './get-one-rencontre.component.html',
  styleUrls: ['./get-one-rencontre.component.css']
})
export class GetOneRencontreComponent implements OnInit {

  id:number;
  rencontre !: Rencontre;


  constructor(route : ActivatedRoute, private service : RencontreService, private router : Router) { 
    const param_id = route.snapshot.paramMap.get("id")
    this.id = param_id? parseInt(param_id) : -1 ;

    if(this.id && this.id > 0)
      service.getRencontre(this.id).subscribe({
        next : (rencontre)=>this.rencontre = rencontre,
        error: (err) => router.navigateByUrl("/")
      });
  }

  ngOnInit(): void {
  }
}
