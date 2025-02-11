import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { inputPlaceholders } from "./consts/consts";
import usePokemonApi from "./context/api";
import { Pokemon } from "./context/interfaces/pokemon";
import useFlag from "./tools/hooks/useFlags";

const useApp = () => {
  const { getByGen, getByType, getByName } = usePokemonApi();

  const [pokeList, setPokeList] = useState<Pokemon[]>([]);

  const [isOpenGenSelect, , setFalseIsOpenGenSelect, toggleIsOpenGenSelect] =
    useFlag();
  const [genSelectButtonText, setGenSelectButtonText] = useState(
    inputPlaceholders.genSelect
  );

  const [isOpenTypeSelect, , setFalseIsOpenTypeSelect, toggleIsOpenTypeSelect] =
    useFlag();
  const [typeSelectButtonText, setTypeSelectButtonText] = useState(
    inputPlaceholders.typeSelect
  );

  const [searchText, setSearchText] = useState(inputPlaceholders.search);

  const handleOnNameSearch = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchText(value);

      if (value) {
        const debouncedSearch = debounce(async () => {
          const list = await getByName(value);
          setPokeList(list);
          // reset values of other inputs
          setGenSelectButtonText(inputPlaceholders.genSelect);
          setTypeSelectButtonText(inputPlaceholders.typeSelect);
        }, 400);
        debouncedSearch();
      }
    },
    [getByName]
  );

  const handleOnSelectGen = useCallback(
    async (key: string, value: string) => {
      setGenSelectButtonText(key);
      setFalseIsOpenGenSelect();
      const list = await getByGen(value);
      setPokeList(list);
      // reset values of other inputs
      setTypeSelectButtonText(inputPlaceholders.typeSelect);
      setSearchText(inputPlaceholders.search);
    },
    [getByGen, setFalseIsOpenGenSelect]
  );

  const handleOnTypeSelect = useCallback(
    async (key: string, value: string) => {
      setTypeSelectButtonText(key);
      setFalseIsOpenTypeSelect();
      const list = await getByType(value);
      setPokeList(list);
      // reset values of other inputs
      setGenSelectButtonText(inputPlaceholders.genSelect);
      setSearchText(inputPlaceholders.search);
    },
    [getByType, setFalseIsOpenTypeSelect]
  );

  return {
    searchText,
    genSelectButtonText,
    typeSelectButtonText,
    isOpenGenSelect,
    isOpenTypeSelect,
    toggleIsOpenGenSelect,
    toggleIsOpenTypeSelect,
    handleOnNameSearch,
    handleOnSelectGen,
    handleOnTypeSelect,
    pokeList,
  };
};

export default useApp;
