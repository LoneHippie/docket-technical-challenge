import styled from "styled-components";
import { Theme, theme } from "./context/theme/theme";
import { useCallback } from "react";
import { genQuery, typeQuery } from "./context/api/pokeapi";
import { Button, Searchbar } from "./components";

function App() {
  const handleOnSelectGen = useCallback(async (value: string) => {
    await genQuery(Number(value));
  }, []);
  const handleOnTypeSelect = useCallback(async (value: string) => {
    await typeQuery(value);
  }, []);

  return (
    <StyledContainer theme={theme}>
      <header className="topbar">
        <Searchbar className="topbar__search" />
        <div className="topbar__buttons">
          <Button
            placeholder="Gen select"
            options={[
              { ["Gen 1"]: "1" },
              { ["Gen 2"]: "2" },
              { ["Gen 3"]: "3" },
              { ["Gen 4"]: "4" },
            ]}
            onSelect={handleOnSelectGen}
          />
          <Button
            placeholder="Type select"
            options={[
              { ["Fire"]: "fire" },
              { ["Water"]: "water" },
              { ["Grass"]: "grass" },
              { ["Electric"]: "electric" },
            ]}
            onSelect={handleOnTypeSelect}
          />
        </div>
      </header>
      <section></section>
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
`;

export default App;
