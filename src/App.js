import React from "react";
import "./App.css";
import Profile from "./Profile";
import User from "./User";
function App() {
  return (
    <div className="App">
      <h1>Manu Kaushik</h1>
      <User />
      <Profile text={{ name: 'manu' }} data="Profile data" />

      {/* {
        React.createElement(
          'h2',
          'null',
          'Hello Manu kaushik'
        )
      } */}
    </div>

  )

}

export default App;