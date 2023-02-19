import React, { useState } from "react";
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
import About from "./Routers/About";
import Home from "./Routers/Home";
import Forms from "./Routers/Forms";
import { Link, Route, Router, Routes } from "react-router-dom";
import CallsApi from "./Fetch API/CallsApi";
import Ref from "./UseRef/Ref";
import Userr from "./ErrorBoundary/Userr";
import ErrorBound from "./ErrorBoundary/ErrorBound";
import Main from "./PureComponent/Main";
import Memo from "./Memo/Memo";
import UncontrolForm from "./Components/UncontrolForm";
import Controlled from "./Components/Controlled";

// Memo ⏬
// const App = () => {
// const [count, setCount] = useState(0);
// const [data, setData] = useState(100);
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
        {/* Components */}
        {/* <UncontrolForm /> */}
        <Controlled />

        {/* Memo */}
        {/* Memo with React {count} */}
        {/* <Memo data={data} /> */}
        {/* <button onClick={() => setCount(count + 1)}>Count</button> */}
        {/* <button onClick={() => setData(data + 1)}>Data</button> */}


        {/* Pure Component */}
        {/* <Main /> */}

        {/* Error Boundary */}

        {/* <ErrorBound > <Userr /> </ErrorBound> */}

        {/* Use Ref's */}
        {/* <Ref /> */}

        {/* Fetch API */}
        {/* <CallsApi /> */}

        {/* Routing */}

        {/* <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/forms" element={<Forms />}></Route>
          <About />
          <Home />
          <Forms />
        </Routes> */}


        {/* Styling 🎨 */}
        {/* <Style data="apply" /> agar apply hai toh hee change hua hai  */}
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