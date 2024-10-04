import { PokemonDetails } from "@/interfaces"
import { FetchApiService } from "@/services/ApiService"

// No forcemos a los usuarios de una interfaz a depender de métodos que no necesitan. 
// En JavaScript, esto se traduce a no crear componentes o funciones que hagan demasiadas cosas no relacionadas.

// Si tenemos un componente que acepta muchas props, es probable que esté haciendo demasiadas cosas. 
// En lugar de pasar un montón de opciones, divídelo en componentes más pequeños con responsabilidades específicas.

// Obligar a los componentes a implementar métodos o utilizar propiedades que no necesitan viola la ISP.

// I -> Interface segregation principle / Principio de Segregación de Interfaces

export default async function Page({ params }: { params: { id: string } }) {
    // const pokemon: PokemonDetails = await getPokemon(params.id)

    // D -> Dependency inversion principle / Principio de Inversión de Dependencia

    // Los módulos de alto nivel no deberían depender de módulos de bajo nivel. 
    // Ambos deberían depender de abstracciones.

    // En lugar de hacer que los componentes dependan de implementaciones específicas 
    // (como una API concreta o servicio de autenticación), puedes utilizar contextos 
    // o hooks personalizados para abstraer esas dependencias.


    const apiService = new FetchApiService()
    const pokemon: PokemonDetails = await apiService.fetchPokemonData(params.id)

    return (
        <div key={pokemon._id} className="shadow rounded p-8">
            <p>{pokemon.no}</p>
            <h3 className="text-lg lg:text-xl">{pokemon.name}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatum eligendi ipsam delectus optio praesentium, suscipit neque fuga atque corrupti aut, aliquid hic vel deserunt veritatis maiores eius tempore vero?</p>
        </div>
    )
}