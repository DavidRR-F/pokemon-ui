import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { Pokemon, QueryPokemon, SimilarPokemon } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss']
})
export class PokemonDataComponent implements OnInit {

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.87)', // Set legend text color for dark mode
          filter: (item, chart) => {
            // Return false if the label is undefined, null, or an empty string
            return item.text && item.text.length > 0;
          },
        }
      }
    },
    scales: {
      r: {
        min: 0, // Set the minimum value for the radial axis
        max: 120,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' // Set radial grid color for dark mode
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)' // Set angle lines color for dark mode
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.87)' // Set point labels text color for dark mode
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.1)', // Set ticks color for dark mode
          backdropColor: 'rgba(0, 0, 0, 0)' // Remove the backdrop color around tick labels for dark mode
        }
      }
    }
  };
  public radarChartLabels: string[] = [ 'HP', 'Attack', 'SP_Attack', 'Speed', 'SP_Defense', 'Defense' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ 65, 69, 90, 81, 66, 65 ] }
    ]
  };
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

}
