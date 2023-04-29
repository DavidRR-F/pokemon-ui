import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchPokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl: string = 'http://localhost/api';
  public modalTrigger: EventEmitter<boolean> = new EventEmitter<boolean>();
  private pokemonsSubject = new BehaviorSubject<SearchPokemon[]>([]);
  public pokemons$ = this.pokemonsSubject.asObservable();
  public pokemon: SearchPokemon[] = [];


  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${id}/similar`)
  }

  getAllPokemon() {
    return this.http.get<any>(`${this.baseUrl}/pokemon`).subscribe((data: SearchPokemon[]) => {
      this.pokemonsSubject.next(data);
      this.pokemon = data;
    });
  }

  filterPokemon(name: string, type: string) {
    let pokemonFiltered = this.pokemon;
    if(type !== "" && type !== "all") {
      pokemonFiltered = pokemonFiltered.filter(pokemon => pokemon.type1.toLowerCase().match(type.toLowerCase()) || pokemon.type2?.toLowerCase().match(type.toLowerCase()));
    }
    pokemonFiltered = pokemonFiltered.filter(pokemon => pokemon.name.toLowerCase().startsWith(name.toLowerCase()));
    this.pokemonsSubject.next(pokemonFiltered);
  }
}
