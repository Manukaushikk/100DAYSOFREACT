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
import FormValidation from "./Forms Handling/FormValidation";
import Listing from "./Listing with map function/Listing";
import Style from "./Styling/Style";
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

        {/* Styling 🎨 */}
        <Style data="apply" />{ /*agar apply hai toh hee change hua hai*/}
        {/* <Style /> */}

        {/* Listing with Map */}
        {/* <Listing /> */}

        {/* Form Handling ⬇️   */}
        {/* <Form /> */}
        {/* <FormValidation /> */}
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