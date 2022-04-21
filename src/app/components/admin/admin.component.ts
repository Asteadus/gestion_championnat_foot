import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnexionService } from 'src/app/services/connexion.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  connexionForm: FormGroup;

  constructor(
    builder: FormBuilder, 
    private service: ConnexionService
  ) {
    this.connexionForm = builder.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.service.connect(this.connexionForm.value))
      alert("vous êtes connecté")
    else
      alert("username/password invalide(s)")
  }


  isConnected(){
    return this.service.isConnected;
  }

}
