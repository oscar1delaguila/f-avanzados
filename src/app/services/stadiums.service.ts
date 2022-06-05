import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stadium } from '../models/stadium.interface';
import { Stadiums } from '../models/stadiums.interface';

@Injectable({
  providedIn: 'root'
})
export class StadiumsService {

  constructor(private http: HttpClient) { }


  getAllStadiums():Observable<Stadiums> {
    return this.http.get<Stadiums>('https://myfakeapi.com/api/football/stadiums');
  }

  getStadiumById(identifier:string):Observable<Stadium> {
    return this.http.get<Stadium>('https://myfakeapi.com/api/football/stadiums/' + identifier);

  }


}
