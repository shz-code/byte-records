import { useReducer, useEffect, useState, useCallback } from "react";
import "./assests/css/App.css";
import myContext from "./lib/myContext";
import Navbar from "./components/Navbar";
import TodosContainer from "./components/TodosContainer";

let inititalState;

if (localStorage.getItem("todos") === null) {
  inititalState = [];
} else {
  inititalState = JSON.parse(localStorage.getItem("todos"));
}
const reducer = (state, action) => {
  let sl = state.length + 1;
  if (state.length > 0) {
    sl = state[state.length - 1].sl + 1;
  }
  switch (action.type.type) {
    case "add":
      let title = action.records.records.title;
      let desc = action.records.records.desc;
      if (title === "" || desc === "") {
        alert("Blank");
        return state;
      }
      let newTodo = {
        sl: sl,
        title: title,
        desc: desc,
      };
      return [...state, newTodo];
    case "del":
      let object = action.records.records;
      let newState = state.filter((e) => {
        return e !== object;
      });
      return newState;
    case "up":
      let updateobj = action.records.records;
      let newUpdatedState = state.map((e) => {
        return e.sl === updateobj.sl
          ? { ...e, title: updateobj.title, desc: updateobj.desc }
          : e;
      });
      return newUpdatedState;
    default:
      return state;
  }
};
function App() {
  const [todos, dispatch] = useReducer(reducer, inititalState);
  const [todos_view, SetTodos_view] = useState([]);
  const [show, SetShow] = useState(true);
  const showParameter = todos.length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (todos.length < 1) {
      SetShow((e) => !e);
    }
  }, [todos]);

  useEffect(()=>{
    showParameter < 1 ? SetShow(false) : SetShow(true);
  },[showParameter]);

  const handleSearch = useCallback(
    (search_title) => {
      SetTodos_view(
        todos.filter((e) => {
          return e.title.toLowerCase().includes(search_title.toLowerCase())
            ? e
            : null;
        })
      );
    },
    [todos]
  );

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <myContext.Provider value={{ todos_view, dispatch }}>
          <TodosContainer handleSearch={handleSearch} show={show}/>
        </myContext.Provider>
      </div>
    </div>
  );
}

export default App;
