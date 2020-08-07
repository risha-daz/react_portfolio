import React from "react";
import "./style.css";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";
import bg from "./components/bg.jpg";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Edit from "./components/layout/projects/Edit";
import AppState from "./context/app/AppState";
import PState from "./context/projects/PState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <AppState>
      <PState>
        <Router>
          <div className='mx-auto relative' style={background}>
            <Menu />
            <Header />
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/:id' component={Edit} />
            </Switch>
            <Footer />
            <div className='text-center text-gray-500 font-bold font-lg h-32'>
              &copy; IITI
            </div>
          </div>
        </Router>
      </PState>
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
