import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Homepage</h1>

      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/signup"}>Signup</NavLink>
    </>
  );
}
