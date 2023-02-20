import { useRef } from "react";

export default function Registration() {
  const username = useRef();
  const surname = useRef();
  return (
    <div className="reg">
      <p>Registration user</p>

      <label htmlFor="username">First name</label>
      <input
        type="text"
        id="username"
        ref={username}
        autoComplete="off"
        placeholder="Enter first name..."
      ></input>

      <label htmlFor="surname">Second name</label>
      <input
        type="text"
        id="surname"
        ref={surname}
        autoComplete="off"
        placeholder="Enter second name..."
      ></input>

      <button type="button">Register participant</button>
    </div>
  );
}
