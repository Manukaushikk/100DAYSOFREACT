import React from "react";
import "./App.css";
import Profile from "./Profile";
import User from "./User";
import Hideshow from "./Hideshow";
import Profilee from "./Profilee";
import ComponentDidMount from "./LifeCycleMethods/ComponentDidMount";
import ComponentDidUpdate from "./LifeCycleMethods/ComponentDidUpdate";
import ComponentWillUnmount from "./LifeCycleMethods/ComponentWillUnmount";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import Form from "./Forms Handling/Form";
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

        {/* Form Handling 🪝⬇️   */}
        <Form />
        {/* ⬆️ */}

        {/* HOOKS 🪝⬇️   */}
        {/* <UseState /> */}
        {/* <UseEffect /> */}


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