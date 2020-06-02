import React from "react";
import Home from "./components/Home.jsx";
import { UserProvider } from "./components/resources/states/userContext";
function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

export default App;
