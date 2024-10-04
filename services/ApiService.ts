import { getPokemon } from "@/app/actions/actions";
import { PokemonDetails } from "@/interfaces";

export interface ApiService {
    fetchPokemonData(id: string): Promise<PokemonDetails>;
}

export class FetchApiService implements ApiService {
    async fetchPokemonData(id: string) {
        return await getPokemon(id)
    }
}