import React from "react";
import "./style.css";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";
import bg from "./components/bg.jpg";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Library from "./components/pages/Library";
import AppState from "./context/AppState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <AppState>
      <Router>
        <div className='App mx-auto' style={background}>
          <Menu />
          {}
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
    </AppState>
  );
};

const background = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

export default App;
