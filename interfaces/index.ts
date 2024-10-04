export interface Pokemon {
    _id: string;
    name: string;
    no: number;
}

export interface PokemonDetails extends Pokemon {
    description: string;
}