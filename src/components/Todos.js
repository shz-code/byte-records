import React, { memo } from "react";
import myContext from "../lib/myContext";
import Todo from "./Todo";

function Todos() {
  const context = React.useContext(myContext);
  const todos = context.todos_view;
  return (
    <div className="todos">
      <h3>All Records</h3>
      {todos.map((item) => {
        return (
          <Todo key={item.sl} dispatch={context.dispatch} records={item} />
        );
      })}
    </div>
  );
}

export default memo(Todos);
