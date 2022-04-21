import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Club } from '../models/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  //private readonly BASE_URL = "http://localhost:3000/clubs";
  private readonly BASE_URL = "http://localhost:8080/club";
  constructor(private client: HttpClient) { }

  // GET 
  getClubs(){
    return this.client.get<Club[]>(this.BASE_URL)
    
  }
  getClub(id : number){
    return this.client.get<Club>(this.BASE_URL + "/"+id)
    
  }
}
