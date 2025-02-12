import React from "react";
import styled from "styled-components";
import { Theme, theme } from "../../../context/theme/theme";

interface Props {
  className: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  testID: string;
}

const Searchbar = ({ className, onSearchChange, value, testID }: Props) => {
  return (
    <StyledSearchbar
      theme={theme}
      data-test-id={testID}
      className={className}
      value={value}
      onChange={onSearchChange}
    />
  );
};

const StyledSearchbar = styled("input")<{ theme: Theme }>`
  height: 24px;
  padding: 6px 12px;
  color: ${({ theme }) => theme.palette.text};
  font-size: 14px;
  border-radius: 8px;
  border-right: ${({ theme }) => `2.5px solid ${theme.palette.text}`};
  border-bottom: ${({ theme }) => `2.5px solid ${theme.palette.text}`};
  border-top: none;
  border-left: none;

  &:focus,
  &:hover {
    outline: none;
  }
`;

export default Searchbar;
