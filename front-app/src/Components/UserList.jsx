import "./UserCardStyle.css";
import UserCard from './UserCard.jsx'

function UserList(props) {
  //props: id / firstName / lastName / phoneNumber / email

  const cartas = props.cartas;

  return (
    <div className="container">
      {cartas.map((carta) => {
        return(<UserCard key={carta.id} carta={carta}/>)
      })}
    </div>
  );
}

export default UserList;
