import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private connexionService: ConnexionService) {
    connexionService.$connected.subscribe(() => this.isConnected);
   }

  ngOnInit(): void {
  }

  isConnected(){
    return this.connexionService.isConnected;
  }

}
