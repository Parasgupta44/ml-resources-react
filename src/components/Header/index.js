import React from "react";
import "./style.css";

export function Header({ searchValue, setSearch }) {
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
