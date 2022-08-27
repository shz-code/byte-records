import React, { useState } from "react";
import Button from "./Button";

export default function Todo({ records, dispatch }) {
  const sl = records.sl;
  const [title, SetTitle] = useState(records.title);
  const [desc, SetDesc] = useState(records.desc);
  const [disabled, SetDisabled] = useState(true);
  return (
    <div className="todo">
      <div className="todo_details">
        <p>
          Serial: <span style={{ fontStyle: "italic" }}>{sl}</span>
        </p>
        {disabled ? (
          <input
            className="inp_title hide"
            disabled
            type="text"
            value={title}
          />
        ) : (
          <>
            <span>Title</span>
            <input
              className="inp_title"
              type="text"
              value={title}
              onChange={(e) => SetTitle(e.target.value)}
            />
          </>
        )}
        {disabled ? (
          <input className="inp_desc hide" disabled type="text" value={desc} />
        ) : (
          <>
            <span>Description</span>
            <input
              className="inp_desc"
              type="text"
              value={desc}
              onChange={(e) => SetDesc(e.target.value)}
            />
          </>
        )}
      </div>
      <div className="btn_container">
        <Button val="Delete" dispatch={dispatch} type="del" records={records} />
        {disabled ? (
          <button className="btn" onClick={() => SetDisabled((e) => !e)}>
            Update
          </button>
        ) : (
          <>
            <Button
              val="Save"
              dispatch={dispatch}
              type="up"
              records={{ title, desc, sl }}
            />
            <button className="btn" onClick={() => SetDisabled((e) => !e)}>
              Done
            </button>
          </>
        )}
      </div>
    </div>
  );
}