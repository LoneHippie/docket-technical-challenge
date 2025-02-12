import { useMemo } from "react";
import { Pokemon, Type } from "../../context/interfaces/pokemon";
import { Theme, theme } from "../../context/theme/theme";

interface TypeIcon {
  icon: string;
  background: string;
}

const useStyles = (pokemon: Pokemon) => {
  const primaryType = useMemo(
    () => pokemon.types[0].type.name,
    [pokemon.types]
  );

  const textColor = useMemo(() => {
    if (
      [
        "grass",
        "water",
        "poison",
        "fighting",
        "dragon",
        "dark",
        "ghost",
        "psychic",
      ].includes(primaryType)
    ) {
      return "#dcdcdc";
    } else {
      return "#2f4f4f";
    }
  }, [primaryType]);

  const backgroundColorByType = (type: string): string => {
    return theme.palette[type as keyof Theme["palette"]];
  };

  const backgroundColor = useMemo(() => {
    return backgroundColorByType(primaryType);
  }, [primaryType]);

  const icons = useMemo<TypeIcon[]>(() => {
    const types = pokemon.types.map((el: Type) => el.type.name);
    return types.map((el: string) => {
      return {
        icon: `https://raw.githubusercontent.com/LoneHippie/masterdex_v2/master/src/images/${el}.svg`,
        background: backgroundColorByType(el),
      };
    });
  }, [pokemon.types]);

  return {
    icons,
    backgroundColor,
    textColor,
  };
};

export default useStyles;
