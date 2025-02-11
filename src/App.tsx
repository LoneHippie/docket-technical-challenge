import styled from "styled-components";
import { Theme, theme } from "./context/theme/theme";
import { useCallback, useState } from "react";
import { Button, Card, Searchbar } from "./components";
import { genOptions, typeOptions } from "./consts/consts";
import usePokemonApi from "./context/api";
import { Pokemon } from "./context/interfaces/pokemon";

function App() {
  const { getByGen, getByType, getByName } = usePokemonApi();

  const [pokeList, setPokeList] = useState<Pokemon[]>([]);

  const handleOnNameSearch = useCallback(
    async (name: string) => {
      const list = await getByName(name);
      setPokeList(list);
    },
    [getByName]
  );
  const handleOnSelectGen = useCallback(
    async (value: string) => {
      const list = await getByGen(value);
      setPokeList(list);
    },
    [getByGen]
  );
  const handleOnTypeSelect = useCallback(
    async (value: string) => {
      const list = await getByType(value);
      setPokeList(list);
    },
    [getByType]
  );

  return (
    <StyledContainer theme={theme}>
      <header className="topbar">
        <Searchbar
          className="topbar__search"
          onSearchChange={handleOnNameSearch}
        />
        <div className="topbar__buttons">
          <Button
            placeholder="Gen select"
            options={genOptions}
            onSelect={handleOnSelectGen}
          />
          <Button
            placeholder="Type select"
            options={typeOptions}
            onSelect={handleOnTypeSelect}
          />
        </div>
      </header>
      <section className="container">
        <div className="container__grid">
          {pokeList.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </section>
    </StyledContainer>
  );
}

const StyledContainer = styled("main")<{ theme: Theme }>`
  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    height: 48px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.pokedex2};
    color: ${({ theme }) => theme.white};
    padding-left: 12px;
    padding-right: 12px;

    z-index: 1000;

    &__search {
      width: 50%;
    }

    &__buttons {
      margin-right: 24px;
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
  }

  .container {
    position: relative;
    margin-top: 48px;
    padding-left: 24px;
    padding-right: 24px;

    &__grid {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 48px);
      padding-left: 24px;
      padding-right: 24px;
      overflow: scroll;
      padding-top: 24px;
      display: grid;
      grid-gap: 8px;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(6, 1fr);
    }
  }
`;

export default App;
