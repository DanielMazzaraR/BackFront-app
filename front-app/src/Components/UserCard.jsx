import "./UserCardStyle.css";

function UserCard(props) {
  return (
    <div className="card">
      <div className="box">
        <div className="content">
          <h2>ID: {props.carta.id}</h2>
          <h3>
            {props.carta.firstName} {props.carta.lastName}
          </h3>
          <p>
            Email: {props.carta.email} <br/>
            Phone Number: {props.carta.phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
