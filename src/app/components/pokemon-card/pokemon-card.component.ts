import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchPokemon, SimilarPokemon } from 'src/app/models/pokemon.interface';
import { PokemonDataComponent } from '../pokemon-data/pokemon-data.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: SearchPokemon;
  public path: string = '../../../assets/pokemons/';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PokemonDataComponent, {
      data: { id: this.pokemon?.id },
      disableClose: false
    });
    dialogRef.backdropClick().subscribe(() => {
      dialogRef.close();
    });
  }

}
