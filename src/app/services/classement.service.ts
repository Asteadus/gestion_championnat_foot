import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classement } from '../models/classement.model';

@Injectable({
  providedIn: 'root'
})
export class ClassementService {
  private readonly BASE_URL = "http://localhost:8080/classement";

  constructor(private client: HttpClient) { }

  getClassements(){
    return this.client.get<Classement[]>(this.BASE_URL)
  }

  getClassement(id : number){
    return this.client.get<Classement[]>(this.BASE_URL + "/"+id)
  }
}
