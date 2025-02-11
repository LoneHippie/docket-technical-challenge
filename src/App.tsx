import styled from "styled-components";
import { Theme, theme } from "./context/theme/theme";
import { Button, Card, Searchbar } from "./components";
import { genOptions, typeOptions } from "./consts/consts";
import useApp from "./useApp";

function App() {
  const {
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
  } = useApp();

  return (
    <StyledContainer theme={theme}>
      <header className="topbar">
        <Searchbar
          className="topbar__search"
          value={searchText}
          onSearchChange={handleOnNameSearch}
        />
        <div className="topbar__buttons">
          <Button
            value={genSelectButtonText}
            options={genOptions}
            isOpen={isOpenGenSelect}
            onClick={toggleIsOpenGenSelect}
            onSelect={handleOnSelectGen}
          />
          <Button
            value={typeSelectButtonText}
            options={typeOptions}
            isOpen={isOpenTypeSelect}
            onClick={toggleIsOpenTypeSelect}
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
    box-shadow: 4px 2px 8px black;

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
    height: 100vh;
    background-color: ${({ theme }) => theme.pokedex};

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
      background-color: ${({ theme }) => theme.pokedex};
    }
  }
`;

export default App;
