import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Championnat } from '../models/championnat.model';

@Injectable({
  providedIn: 'root'
})
export class ChampionnatService {

  private readonly BASE_URL = "http://localhost:8080/championnat";
 // private readonly BASE_URL = "http://localhost:3000/championnats";
  

  constructor(private client: HttpClient) { }

  getChampionnats(){
    return this.client.get<Championnat[]>(this.BASE_URL)
  }

  getChampionnat(id : number){
    return this.client.get<Championnat>(this.BASE_URL + "/"+id)
  }
}
