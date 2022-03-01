import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "./App.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
