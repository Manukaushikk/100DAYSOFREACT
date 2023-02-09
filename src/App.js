import React from "react";
import "./App.css";
import Profile from "./Profile";
import User from "./User";
import Hideshow from "./Hideshow";
import Profilee from "./Profilee";
import ComponentDidMount from "./LifeCycleMethods/ComponentDidMount";
import ComponentDidUpdate from "./LifeCycleMethods/ComponentDidUpdate";
function App() {
  return (
    <div className="App">
      <h1>Manu Kaushik</h1>
      {/* <User /> */}
      {/* <Profile text={{ name: 'manu' }} data="Profile data" /> */}
      {/* <Hideshow /> */}
      {/* <Profilee /> */}
      {/* <ComponentDidMount /> */}
      <ComponentDidUpdate />
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