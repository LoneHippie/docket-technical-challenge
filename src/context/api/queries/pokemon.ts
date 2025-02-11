import { Pokemon } from "../../interfaces/pokemon";
import {
  filters,
  pokeapiNamespace,
  pokeapiQuery,
  queryOptions,
} from "../utils";

const pokemon_v2 = `
        name
        id
        height
        weight
        types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
                name
                id
            }
        }
        specs: pokemon_v2_pokemonspecy {
            color: pokemon_v2_pokemoncolor {
                name
            }
            genId: generation_id
        }
    `;
export function searchQuery(search: string) {
  const searchQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: {name: {_eq: ${search}}, _and: ${filters.standardVariantsOnly}}) {
                ${pokemon_v2}
            }
        }
    `;

  return pokeapiQuery<Pokemon[]>(queryOptions(searchQuery));
}

export function genQuery(gen: number) {
  const genQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {pokemon_v2_generation: {id: {_eq: ${gen}}}}, _and: ${filters.standardVariantsOnly}}) {
                ${pokemon_v2}
            }
        }
    `;

  return pokeapiQuery<Pokemon[]>(queryOptions(genQuery));
}

export function typeQuery(type: string) {
  const typeQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: ${type}}}}, _and: ${filters.standardVariantsOnly}}) {
                ${pokemon_v2}
            }
        }
    `;

  return pokeapiQuery<Pokemon[]>(queryOptions(typeQuery));
}
