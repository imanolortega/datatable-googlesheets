import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onInputChange = value => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <>
    <input
      type="text"
      className="form-control"
      style={{ width: "240px" }}
      placeholder="Materia o Docente"
      value={search}
      onChange={e => onInputChange(e.target.value)}
    />
    <label className="m-2 label-hidden">Buscar: </label>
    </>
  );
};

export default Search;