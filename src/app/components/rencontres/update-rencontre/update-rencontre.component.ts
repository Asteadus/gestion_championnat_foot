import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rencontre } from 'src/app/models/rencontre.model';
import { RencontreService } from 'src/app/services/rencontre.service';
import { RENCONTRE_FORM } from '../../forms/rencontre.form';

@Component({
  selector: 'app-update-rencontre',
  templateUrl: './update-rencontre.component.html',
  styleUrls: ['./update-rencontre.component.css']
})
export class UpdateRencontreComponent implements OnInit {

  rencontreForm : FormGroup;
  rencontre!: Rencontre
  scoreUpdateBoolean: boolean =true;

 

  constructor(builder : FormBuilder, private route: ActivatedRoute, private service: RencontreService, private router : Router) {
    this.rencontreForm =builder.group(RENCONTRE_FORM);
    this.loadRencontre(route.snapshot.params['id']);
    route.params.subscribe((params) => this.loadRencontre(params['id']));
   }

  ngOnInit(): void {
  }

  loadRencontre(id: number){
    this.service.getRencontre(id).subscribe((rencontre) =>{ 
        this.setupForm(rencontre);
    })
  }

  setupForm(rencontre: Rencontre) {
    this.rencontre = rencontre;

    this.rencontreForm.patchValue({
      scoreDomicile: rencontre.scoreDomicile,
      scoreVisiteur: rencontre.scoreVisiteur,
    })
    
  }

  onSubmit(){
    // console.log(this.tacheForm.value)
    if( this.rencontre && this.rencontreForm.valid ){
      console.log(this.rencontreForm)
      this.service.update(this.rencontre.id, this.rencontreForm.value).subscribe({
        next: rencontre => {
        this.setupForm(rencontre);}
        
      });
     
    }
    else
      alert('form invalide')
  }
  
}
