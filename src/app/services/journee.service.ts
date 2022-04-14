import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Journee } from '../models/journee.model';

@Injectable({
  providedIn: 'root'
})
export class JourneeService {

  //private readonly BASE_URL = "http://localhost:3000/rencontres";
  private readonly BASE_URL = "http://localhost:8080/journee";
  constructor(private client: HttpClient) { }

  // GET 
  getRencontres(){
    return this.client.get<Journee[]>(this.BASE_URL)
    
  }
  getRencontre(id : number){
    return this.client.get<Journee>(this.BASE_URL + "/"+id)

  }
}
