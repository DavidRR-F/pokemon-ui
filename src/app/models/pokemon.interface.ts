export interface Pokemon {
    id: number;
    name: string;
    abilities: string[];
    japanese_name: string;
    pokedex_number: number;
    percentage_male: number;
    height_m: number;
    weight_kg: number;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    sp_attack: number;
    sp_defense: number;
    type1: string;
    type2: string;
    generation: number;
    is_legendary: boolean;
    classfication: string;
    experience_growth: number;
    base_happiness: number;
    base_total: number;
    capture_rate: string;
    base_egg_steps: number;
    against_bug: number;
    against_dark: number;
    against_dragon: number;
    against_electric: number;
    against_fairy: number;
    against_fight: number;
    against_fire: number;
    against_flying: number;
    against_ghost: number;
    against_grass: number;
    against_ground: number;
    against_ice: number;
    against_normal: number;
    against_poison: number;
    against_psychic: number;
    against_rock: number;
    against_steel: number;
    against_water: number;
    pokemon_image: string;
}

export interface SimilarPokemon {
    id: number;
    name: string;
    pokemon_image: string;
}

export interface QueryPokemon {
    pokemon: Pokemon;
    nearest_pokemon: SimilarPokemon[];
}

export interface SearchPokemon {
    id: number;
    name: string;
    type1: string;
    type2?: string;
    pokemon_image: string;
}