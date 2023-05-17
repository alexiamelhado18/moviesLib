import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/index";

export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h1>MoviesLib</h1>
      <Outlet />
    </div>
  )
};