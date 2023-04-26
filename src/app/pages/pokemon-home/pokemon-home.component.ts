import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { SearchPokemon } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent implements OnInit {

  public pokemonFilteredList: SearchPokemon[] = [];
  public isLoading: boolean = true;
  public isError: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.pokemons$
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe((data) => {
      this.pokemonFilteredList = data;
      this.isLoading = false;
    },
    (error) => {
      this.isError = true;
    })
    this.pokemonService.getAllPokemon()
  }

}
