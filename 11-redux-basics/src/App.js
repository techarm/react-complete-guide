import React from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <React.Fragment>
      <Header />
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
