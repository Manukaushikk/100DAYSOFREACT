import React from "react";
import "./App.css";
import Profile from "./Profile";
import User from "./User";
import Hideshow from "./Hideshow";
import Profilee from "./Profilee";
import ComponentDidMount from "./LifeCycleMethods/ComponentDidMount";
import ComponentDidUpdate from "./LifeCycleMethods/ComponentDidUpdate";
import ComponentWillUnmount from "./LifeCycleMethods/ComponentWillUnmount";
import Basichooks from "./Hooks/Basichooks";
class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     toggle: true

  //   }
  // }
  render() {
    return (
      <div className="App">
        <h1>Manu Kaushik</h1>
        <Basichooks />
        {/* <User /> */}
        {/* <Profile text={{ name: 'manu' }} data="Profile data" /> */}
        {/* <Hideshow /> */}
        {/* <Profilee /> */}
        {/* <ComponentDidMount /> */}
        {/* <ComponentDidUpdate /> */}
        {/* 
        {
          this.state.toggle ?
            <ComponentWillUnmount /> : null

        }
        <button onClick={() => { this.setState({ toggle: !this.state.toggle }) }}>Delete ComponentWillUnmount</button> */}
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
}

export default App;