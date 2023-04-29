import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { Pokemon, QueryPokemon, SimilarPokemon } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { RADAR_OPTIONS } from 'src/app/common/constants';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss']
})
export class PokemonDataComponent implements OnInit {

  public radarChartOptions: ChartConfiguration['options'] = RADAR_OPTIONS;
  public radarChartLabels: string[] = [ 'HP', 'Attack', 'SP Attack', 'Speed', 'SP Defense', 'Defense' ];

  public radarChartData: ChartData<'radar'>;
  public radarChartType: ChartType = 'radar';

  public isLoading: boolean = true;
  public isError: boolean = false;
  public pokemon!: Pokemon;
  public nearestPokemon!: SimilarPokemon[];
  public path: string = '../../../assets/pokemons/';

  constructor(
    private pokemonService: PokemonService,
    public dialogRef: MatDialogRef<PokemonDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.data.id).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe((data: QueryPokemon) => {
      this.pokemon = data.pokemon;
      this.getRadarData(this.pokemon)
      this.nearestPokemon = data.nearest_pokemon;
      this.isLoading = false;
    },
    (error) => {
      this.isError = true;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getRadarData(pokemon: Pokemon) {
    this.radarChartData = {
      labels: this.radarChartLabels,
      datasets: [
        { data: [
           pokemon.hp, 
           pokemon.attack, 
           pokemon.sp_attack, 
           pokemon.speed, 
           pokemon.sp_defense, 
           pokemon.defense 
          ] 
        }
      ]
    }
  }

}
