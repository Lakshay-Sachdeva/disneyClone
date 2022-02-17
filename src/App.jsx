import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import "./App.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
