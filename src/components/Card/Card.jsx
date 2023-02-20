function Card({ userData }) {
  const { id, name, surname } = userData;
  return (
    <li className="cardItem">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Time: {surname}</p>
    </li>
  );
}

export default Card;
