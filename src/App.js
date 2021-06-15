import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TableTemplate from "./Table/TableTemplate";

function App() {
  const [todos, setTodos] = useState(0);
  const [store, setStore] = useState(0);

  let [sortby, setSortBy] = useState("asc");
  let searchBy = ({ target }) => {
    let result = store.filter((item) => {
      // console.log(item.title);
      return item.title.includes(target.value);
    });
    setTodos(result);
  };

  let sorting = () => {
    sortby == "asc" ? setSortBy("des") : setSortBy("asc");
    if (sortby == "asc") {
      let res = todos.sort((a, b) => {
        return a.id - b.id;
      });
      setTodos(todos.reverse());
    } else {
      let res = todos.sort((a, b) => {
        return a.id - b.id;
      });
      setTodos(todos);
    }
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 10,
        },
      })
      .then((res) => {
        setStore(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        // alert("Server Error");
      });
  }, []);

  return (
    <TableTemplate
      rows={todos}
      sorting={sorting}
      search={searchBy}
    ></TableTemplate>
  );
}

export default App;
