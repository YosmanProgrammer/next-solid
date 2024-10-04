// import { getPokemons } from "./actions/actions";

import { Pokemon } from "@/interfaces";
import Link from "next/link";

export default async function Home() {
  // Una violación común de SRP se produce cuando un único componente maneja múltiples responsabilidades,
  // como la obtención de datos y la representación de la interfaz de usuario.

  // S -> Single responsability principle / Principio de Responsabilidad Única

  // Mala forma
  const res = await fetch('http://localhost:3001/api/v2/pokemon?limit=20')
  const pokemonsData: Pokemon[] = await res.json()

  // Forma correcta
  // const pokemonsData = await getPokemons()

  console.log(pokemonsData);


  return (
    <div className="p-8">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl">Pokemon API</h1>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {pokemonsData.map((item) => {
          return (
            <Link key={item._id} href={`/${item.no}`} className="shadow rounded p-8 text-center">
              <p>{item.no}</p>
              <h3 className="text-lg lg:text-xl">{item.name}</h3>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
