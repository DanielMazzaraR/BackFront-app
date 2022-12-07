import "./App.css";
import axios from "axios";
import UserList from "./Components/UserList.jsx";
import React, { useState } from "react";
import { Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import NewUser from "./Pages/NewUser";

function App() {
  const [completeList, setCompleteList] = useState([]);

  const appViz = () => {
    return (
      <Routes>
        <Route path="/" element={<Home completeList={completeList} />} />
        <Route path="newuser" element={<NewUser/>}/>
        <Route path="*" element={<Error404/>} /> 
      </Routes>
    );
  };

  const getInfoUser = () => {
    axios
      .get("http://localhost:9095/users")
      .then((response) => {
        setCompleteList(response.data);
      })
      .finally(appViz());
  };

  getInfoUser();

  return appViz();
}

export default App;
