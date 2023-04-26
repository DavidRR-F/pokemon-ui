import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchPokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl: string = 'http://localhost';
  private pokemonsSubject = new BehaviorSubject<SearchPokemon[]>([]);
  public pokemons$ = this.pokemonsSubject.asObservable();


  constructor(private http: HttpClient) { }

  getPokemon(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${id}/similar`)
  }

  getAllPokemon(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon`)
  }
}
