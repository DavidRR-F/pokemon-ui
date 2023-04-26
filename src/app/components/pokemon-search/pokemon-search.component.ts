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

  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })

  @Output() searchEvent = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.subscribe((value) => {
      //this.searchEvent.emit(value);
      //console.log(value)
      this.pokemonService.filterPokemon(value);
    });
  }

}
