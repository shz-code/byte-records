import React, { useState } from "react";
import myContext from "../lib/myContext";
import Button from "./Button";

export default function AddTodo() {
  const context = React.useContext(myContext);
  const [title, SetTitle] = useState("");
  const [desc, SetDesc] = useState("");
  return (
    <div className="addtodo">
      <h3>Add New Record</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <label htmlFor="desc">Description</label>
      <input
        id="desc"
        type="text"
        value={desc}
        onChange={(e) => SetDesc(e.target.value)}
      />
      <Button
        val="Submit"
        type="add"
        dispatch={context.dispatch}
        records={{ title, desc }}
      />
    </div>
  );
}
