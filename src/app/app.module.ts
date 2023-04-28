import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonHomeComponent } from './pages/pokemon-home/pokemon-home.component';
import { PokemonSingleComponent } from './pages/pokemon-single/pokemon-single.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgLazyLoaderDirective } from './directives/img-lazy-loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHomeComponent,
    PokemonSingleComponent,
    PokemonDataComponent,
    PokemonCardComponent,
    PokemonSearchComponent,
    ImgLazyLoaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
