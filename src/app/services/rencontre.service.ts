import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { RencontreForm } from '../components/forms/rencontre.form';
import { Rencontre } from '../models/rencontre.model';

@Injectable({
  providedIn: 'root'
})
export class RencontreService {
  private updated = new Subject<null>();
  


  //private readonly BASE_URL = "http://localhost:3000/rencontres";
  private readonly BASE_URL = "http://localhost:8080/rencontre";
  constructor(private client: HttpClient) { }

  // GET 
  getRencontres(): Observable<Rencontre[]>{
    return this.client.get<Rencontre[]>(this.BASE_URL)
    
  }
  getRencontre(id : number){
    return this.client.get<Rencontre>(this.BASE_URL + "/"+id)

  }

  update(id: number, form: RencontreForm): Observable<Rencontre>{
    return this.client.patch<Rencontre>(this.BASE_URL+'/update/'+id, form).pipe( tap(() => this.updated.next(null)) );
  }
  
  public get $updated(): Observable<null>{
    return this.updated;
  }
}
