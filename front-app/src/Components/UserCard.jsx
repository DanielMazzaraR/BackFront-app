import "./UserCardStyle.css";

function UserCard(props) {
  return (
    <div class="card">
      <div class="box">
        <div class="content">
          <h2>ID: {props.carta.id}</h2>
          <h3>
            {props.carta.firstName} {props.carta.lastName}
          </h3>
          <p>
            Email: {props.carta.email}
            Phone Number: {props.carta.phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
