import styled from "styled-components";
import { Theme } from "../../context/theme/theme";

interface Props {
  options: Record<string, string>[];
  onSelect: (key: string, value: string) => void;
  onClick: () => void;
  value: string;
  isOpen: boolean;
}

const Button = ({ options, onSelect, value, onClick, isOpen }: Props) => {
  return (
    <StyledContainer style={{ position: "relative" }}>
      <button onClick={onClick}>{value}</button>
      {isOpen && (
        <ul>
          {options.map((option) => {
            return Object.entries(option).map(([key, value]) => (
              <li onClick={() => onSelect(key, value)}>{key}</li>
            ));
          })}
        </ul>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled("div")<{ theme: Theme }>`
  position: relative;

  & > button {
    font-size: 14px;
    border-radius: 8px;
    padding: 6px 12px;
  }

  & > ul {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 5px;
    margin-top: 5px;
    list-style: none;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 5000000;

    & > li {
      color: #2f4f4f;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default Button;
