const pokemonTypes = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

export const genOptions: Record<string, string>[] = [
  { ["Gen 1"]: "1" },
  { ["Gen 2"]: "2" },
  { ["Gen 3"]: "3" },
  { ["Gen 4"]: "4" },
  { ["Gen 5"]: "5" },
  { ["Gen 6"]: "6" },
  { ["Gen 7"]: "7" },
  { ["Gen 8"]: "8" },
];

export const typeOptions: Record<string, string>[] = pokemonTypes.map(
  (type) => ({ [type[0].toUpperCase() + type.slice(1)]: type })
);
