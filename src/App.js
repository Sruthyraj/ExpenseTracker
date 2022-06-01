import "./Form";

import { Button, Container } from "reactstrap";

import Form from "./Form";
import List from "./List";

import Main from "./Main";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Routes } from "react-router";
function App() {
  return (
    <BrowserRouter>
    {/* <Link to="/">LoginFunctional
    </Link> */}
    {/* <Link to="/list">Test
    </Link> */}
    <div className="App">
      
        <Routes>
          <Route exact path="/" element={<Main/>}>
           
          </Route>
          <Route path="/list" element={<List />}>
           
          </Route>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}



export default App;
