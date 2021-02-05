import React, {useState} from 'react'
import PokemonData from '../components/PokemonData';
import Search from '../components/Search';

export default function Home() {


    const [pokemon, setPokemon] = useState("");
    const [loading, setLoading] = useState(true);

    const getPokemon = async (query) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        const results =  await response.json();
        setPokemon(results);
        setLoading(false);
    }

    return (
        <div>
            <Search getPokemon={getPokemon} />
            {!loading && pokemon ? (
                <PokemonData 
                    name={pokemon.name}
                    sprite={pokemon.sprites.front_shiny}
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types}
                />
            ): null}
        </div>
    )
}
