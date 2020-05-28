import React from "react";
import "./style.css";
import Header from "./components/divisions/Header";
import Navbar from "./components/divisions/Navbar";
import Menu from "./components/divisions/Menu";
import Footer from "./components/divisions/Footer";
import bg from "./components/bg.jpg";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Library from "./components/pages/Library";
import OverallState from "./context/OverallState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <OverallState>
      <Router>
        <div className='App mx-auto' style={background}>
          <Menu />
          <Header />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/library' component={Library} />
          </Switch>
          <Footer />
          <div className='text-center text-gray-500 font-bold font-lg h-32'>
            &copy; IITI
          </div>
        </div>
      </Router>
    </OverallState>
  );
}

const background = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

export default App;
