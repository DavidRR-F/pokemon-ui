import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonHomeComponent } from './pages/pokemon-home/pokemon-home.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';

const routes: Routes = [
  {path: '', component: PokemonHomeComponent},
  {path: 'pokemon/:id', component: PokemonDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
