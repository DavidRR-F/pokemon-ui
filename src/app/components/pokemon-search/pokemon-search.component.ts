import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchPokemon } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  public pokemonFilter: string[] = ["all","normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"];
  public selectedFilterOption: string = "Filter by Type";
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
    filter: new FormControl('')
  });

  private searchText: string = '';
  private filterType: string = '';

  @Output() searchEvent = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.subscribe((value) => {
      this.searchText = value;
      this.pokemonService.filterPokemon(this.searchText, this.filterType);
    });
    this.searchForm.get('filter')?.valueChanges.subscribe((value) => {
      this.filterType = value;
      this.pokemonService.filterPokemon(this.searchText, this.filterType);
    })
  }

}
