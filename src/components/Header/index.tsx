import React from "react";
import "./styles.css";

type Props = {
  searchValue: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({ searchValue, setSearch }: Props) {
  return (
    <header>
      <h1>ML Resources</h1>
      <input
        type="text"
        placeholder="Search resource"
        value={searchValue}
        onChange={({ target: { value } }) => setSearch(value)}
      />
    </header>
  );
}
