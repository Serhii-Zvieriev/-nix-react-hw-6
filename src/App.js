import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Stopwatch from "./components/Stopwatch/Stopwatch";
import Searchbar from "./components/Searchbar/Searchbar";
import CardList from "./components/CardList/CardList";
import Registration from "./components/Registration/Registration";
import Total from "./components/Total/Total";
import { getUsers } from "./redux/usersSlice";
import "./App.css";

function App() {
  const usersData = useSelector(getUsers);
  const [filter, setFilter] = useState("");

  const filterHendler = ({ target }) => {
    setFilter(target.value);
  };
  return (
    <div className="container">
      <div className="leftSide">
        <Searchbar filter={filter} onChange={filterHendler} />
        <CardList usersData={usersData} />
      </div>
      <div className="rightSide">
        <Registration />
        <Total />
      </div>

      {/* <Stopwatch time="00:00:00" /> */}
    </div>
  );
}

export default App;
