import { Component, Input, OnInit } from '@angular/core';
import { SearchPokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: SearchPokemon;
  public path: string = '../../../assets/pokemons/';

  constructor() { }

  ngOnInit(): void {
  }

}
