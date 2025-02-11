import { Pokemon } from "../interfaces/pokemon";
import { genQuery, searchQuery, typeQuery } from "./queries/pokemon";

enum QueryAction {
  GEN,
  TYPE,
  NAME,
}

const usePokemonApi = () => {
  const searchPokemon = {
    byGen: async (gen: number) => await genQuery(gen),
    byType: async (type: string) => await typeQuery(type),
    byName: async (name: string) => await searchQuery(name),
  };

  const runSearch = async (
    action: QueryAction,
    param: string
  ): Promise<Pokemon[]> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let res: any;
    switch (action) {
      case QueryAction.GEN:
        res = await searchPokemon.byGen(Number(param));
        break;
      case QueryAction.TYPE:
        res = await searchPokemon.byType(param);
        break;
      case QueryAction.NAME:
        res = await searchPokemon.byName(param);
        break;
      default:
        return [];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const list: Pokemon[] = res.map((el: any) => {
      return {
        ...el,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png`,
      };
    });
    return list;
  };

  const getByName = async (name: string) => runSearch(QueryAction.NAME, name);
  const getByGen = async (gen: string) => runSearch(QueryAction.GEN, gen);
  const getByType = async (type: string) => runSearch(QueryAction.TYPE, type);

  return {
    getByName,
    getByGen,
    getByType,
  };
};

export default usePokemonApi;
