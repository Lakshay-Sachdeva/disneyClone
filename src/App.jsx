import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};
