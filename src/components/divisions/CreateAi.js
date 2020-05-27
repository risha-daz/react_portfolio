import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CreateAi extends Component {
  state = {
    visibility: "invisible",
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleScroll = (e) => {
    let scrollTop = window.pageYOffset;
    if (scrollTop < 300 && this.state.visibility == "visible") {
      this.setState({ visibility: "invisible" });
    }
    if (scrollTop > 300 && this.state.visibility == "invisible") {
      this.setState({ visibility: "visible" });
    }
  };
  render() {
    return (
      <div
        className={`mx-auto text-gray-100 text-7xl ${this.state.visibility}`}
      >
        <Link to='/'>
          <button className='sm:text-5xl text-3xl sm:border-8 border-4 border-white p-4 hover:text-blue-600 hover:border-blue-600'>
            CREATE<b>AI</b>
          </button>
        </Link>
      </div>
    );
  }
}

export default CreateAi;
