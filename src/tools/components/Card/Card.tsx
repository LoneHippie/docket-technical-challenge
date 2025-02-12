import { Pokemon } from "../../../context/interfaces/pokemon";
import styled from "styled-components";
import { theme, Theme } from "../../../context/theme/theme";
import useStyles from "../../hooks/useStyles";

interface Props {
  pokemon: Pokemon;
}

const Card = ({ pokemon }: Props) => {
  const { icons, textColor, backgroundColor } = useStyles(pokemon);

  return (
    <StyledCard
      theme={theme}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div className="titleSection">
        <span className="titleSection__name">
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </span>
        <div className="titleSection__icons">
          {icons.map((icon) => {
            return (
              <img src={icon.icon} style={{ background: icon.background }} />
            );
          })}
        </div>
      </div>
      {pokemon?.sprite && <img className="sprite" src={pokemon.sprite} />}
    </StyledCard>
  );
};

const StyledCard = styled("div")<{
  theme: Theme;
  backgroundColor: string;
  textColor: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => `2px 2px 0.4px 0.2px ${theme.palette.text}`};
  background-color: ${({ backgroundColor }) => backgroundColor};

  .titleSection {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 8px;

    &__name {
      font-size: 14px;
      color: ${({ textColor }) => textColor};
    }

    &__icons {
      display: flex;
      flex-direction: row;
      gap: 4px;

      & > img {
        width: 12px;
        height: 12px;
        border-radius: 100%;
        padding: 2px;
      }
    }
  }

  .sprite {
    margin: 0 auto;
    filter: ${({ textColor }) => `drop-shadow(1.5px 2px 2px ${textColor})`};
  }
`;

export default Card;
