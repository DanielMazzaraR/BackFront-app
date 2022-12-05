import "./App.css";
import axios from "axios";
import UserList from "./Components/UserList.jsx";
import React, { useState } from "react";

function App() {
  const [completeList, setCompleteList] = useState();


  const appViz = () => {
    return (
      <div className="App">
        <h1 className="title">Complete list of users</h1>
        <UserList cartas={completeList}/>
      </div>
    );
  }

  const getInfoUser = () => {
    axios.get("http://localhost:9095/users").then((response) => {
      setCompleteList(response.data);
    }).finally(
      appViz()
    ) 
  };

  getInfoUser();
  
  return appViz();
}

export default App;
