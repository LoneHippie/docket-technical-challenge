import React from "react";
import { Pokemon } from "../../context/interfaces/pokemon";
import styled from "styled-components";
import { theme, Theme } from "../../context/theme/theme";

interface Props {
  pokemon: Pokemon;
}

const Card = ({ pokemon }: Props) => {
  return (
    <StyledCard theme={theme} pokemon={pokemon}>
      <span className="name">
        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
      </span>
      {pokemon?.sprite && <img className="sprite" src={pokemon.sprite} />}
    </StyledCard>
  );
};

const StyledCard = styled("div")<{ theme: Theme; pokemon: Pokemon }>`
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => `2px 2px 0.4px 0.2px ${theme.text}`};
  background-color: ${({ pokemon }) => pokemon.specs.color.name};

  .name {
    font-size: 14px;
    text-shadow: 0px 0px 2px white;
  }

  .sprite {
    margin: 0 auto;
  }
`;

export default Card;
