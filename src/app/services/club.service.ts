import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Club } from '../models/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private readonly BASE_URL = "http://localhost:3000/clubs";
  constructor(private client: HttpClient) { }

  // GET - DELETE
  getClubs(){
    return this.client.get<Club[]>(this.BASE_URL)
    
  }
  getClub(id : number){
    return this.client.get<Club>(this.BASE_URL + "/"+id)

  }
}
