import React, { memo, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function TodosContainer({ handleSearch, show, found }) {
  const [search, SetSearch] = useState("");

  useEffect(() => {
    handleSearch(search);
  }, [search, handleSearch]);

  return (
    <div className="todos_container">
      <AddTodo />
      {show ? (
        <>
          <div className="searcharea">
            <h3>Search For Any Records(Using Title)</h3>
            <div className="row">
              <input
                type="text"
                placeholder="Search Any Title"
                value={search}
                onChange={(e) => SetSearch(e.target.value)}
              />
            </div>
          </div>
          {found ? <Todos /> : <h3>No Records Match</h3>}
        </>
      ) : (
        <h3>No Records</h3>
      )}
    </div>
  );
}

export default memo(TodosContainer);
