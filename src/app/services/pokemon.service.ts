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
  public pokemon: SearchPokemon[] = [];


  constructor(private http: HttpClient) { }

  getPokemon(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${id}/similar`)
  }

  getAllPokemon() {
    return this.http.get<any>(`${this.baseUrl}/pokemon`).subscribe((data: SearchPokemon[]) => {
      this.pokemonsSubject.next(data);
      this.pokemon = data;
    });
  }

  filterPokemon(name: string) {
    let pokemon = this.pokemon.filter(pokemon => pokemon.name.toLowerCase().startsWith(name.toLowerCase()));
    this.pokemonsSubject.next(pokemon);
  }
}
