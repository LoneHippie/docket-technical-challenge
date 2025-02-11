import React, { useCallback, useState } from "react";
import useFlag from "../../tools/hooks/useFlags";
import styled from "styled-components";
import { Theme } from "../../context/theme/theme";

interface Props {
  placeholder: string;
  options: Record<string, string>[];
  onSelect: (value: string) => void;
}

const Button = ({ placeholder, options, onSelect }: Props) => {
  const [isOpen, , setFalseIsOpen, toggleIsOpen] = useFlag();
  const [buttonText, setButtonText] = useState(placeholder);

  const handleSelect = useCallback(
    (key: string, value: string) => {
      setButtonText(key);
      onSelect(value);
      setFalseIsOpen();
    },
    [onSelect, setFalseIsOpen]
  );

  return (
    <StyledContainer style={{ position: "relative" }}>
      <button onClick={toggleIsOpen}>{buttonText}</button>
      {isOpen && (
        <ul>
          {options.map((option) => {
            return Object.entries(option).map(([key, value]) => (
              <li onClick={() => handleSelect(key, value)}>{key}</li>
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
