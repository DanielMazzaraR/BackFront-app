import "./Home.css";
import UserList from "../Components/UserList";
import ButtonCreateNewUser from "../Components/ButtonCreateNewUser";

function Home(props) {
  return (
    <div className="App">
      <header className="">
        <h1 className="title">Complete list of users</h1>
        <ButtonCreateNewUser />
      </header>
      <UserList cartas={props.completeList} />
      <footer style={{color: "white"}}>
        Created by Daniel Mazzara
      </footer>
    </div>
  );
}

export default Home;
