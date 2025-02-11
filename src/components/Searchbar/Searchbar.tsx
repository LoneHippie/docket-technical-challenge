import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";

interface Props {
  className: string;
  onSearchChange: (search: string) => void;
}

const Searchbar = ({ className, onSearchChange }: Props) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);

      if (event.target.value) {
        const debouncedSearch = debounce(() => {
          onSearchChange(event.target.value);
        }, 400);

        debouncedSearch();
      }
    },
    [onSearchChange]
  );

  return (
    <StyledSearchbar
      className={className}
      value={search}
      onChange={handleChangeSearch}
    />
  );
};

const StyledSearchbar = styled("input")`
  height: 24px;
  padding: 6px 12px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  border-radius: 8px;
  border-right: ${({ theme }) => `2.5px solid ${theme.text}`};
  border-bottom: ${({ theme }) => `2.5px solid ${theme.text}`};
  border-top: none;
  border-left: none;

  &:focus,
  &:hover {
    outline: none;
  }
`;

export default Searchbar;
