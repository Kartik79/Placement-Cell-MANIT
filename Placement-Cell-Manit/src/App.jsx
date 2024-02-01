import "./App.css";
//Todo : Add routing some issue with npm react-router package while displaying the content
//
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import About from "./components/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        {/* Add more routes here */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
