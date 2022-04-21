import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classement } from 'src/app/models/classement.model';
import { ClassementService } from 'src/app/services/classement.service';

@Component({
  selector: 'app-get-one-classement',
  templateUrl: './get-one-classement.component.html',
  styleUrls: ['./get-one-classement.component.css']
})
export class GetOneClassementComponent implements OnInit {

  id:number;
  listClassement !: Classement[];

  constructor(route : ActivatedRoute, private service : ClassementService, private router : Router) {
    const param_id = route.snapshot.paramMap.get("id")
    this.id = param_id? parseInt(param_id) : -1 ;
    console.log(this.id);

    if(this.id && this.id > 0)
      service.getClassement(this.id).subscribe({
        next : (classement)=>{
          console.log(classement),
          this.listClassement = classement},
        error: (err) => router.navigateByUrl("/championnats")
      });
   }

  ngOnInit(): void {
  }

}
