import {
  filters,
  pokeapiNamespace,
  pokeapiQuery,
  queryOptions,
} from "../utils";

export function namesQuery() {
  const namesQuery = `
        query {
            ${pokeapiNamespace}: pokemon_v2_pokemon(where: ${filters.standardVariantsOnly}) {
                name
            }
        }
    `;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return pokeapiQuery<any[]>(queryOptions(namesQuery));
}
