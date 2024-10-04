'use server'

export async function getPokemons() {
    const res = await fetch('http://localhost:3001/api/v2/pokemon?limit=20')
    const data = await res.json()
    return data;
}

export async function getPokemon(id: string) {
    const res = await fetch(`http://localhost:3001/api/v2/pokemon/${id}`)
    const data = await res.json()
    return data;
}