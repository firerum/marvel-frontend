import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Mutant } from '../interfaces/Mutant.interface';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  getMutants(query: string): Observable<Mutant> {
    return this.http.get<Mutant>(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=8a70f44fe7ae1c968aadeeaf9cb25ed4`
    );
  }
}
