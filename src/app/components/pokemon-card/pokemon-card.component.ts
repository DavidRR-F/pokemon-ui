import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchPokemon, SimilarPokemon } from 'src/app/models/pokemon.interface';
import { PokemonDataComponent } from '../pokemon-data/pokemon-data.component';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: SearchPokemon;
  public path: string = '../../../assets/pokemons/';

  constructor(
    public dialog: MatDialog,
    public pokemonService: PokemonService  
  ) { }

  ngOnInit(): void {}

  openDialog(): void {
    this.pokemonService.modalTrigger.emit(true);
    this.dialog.open(PokemonDataComponent, {
      data: { id: this.pokemon?.id }
    });
  }

}
