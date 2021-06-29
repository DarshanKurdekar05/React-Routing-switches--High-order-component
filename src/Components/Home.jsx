import React from "react";

const Home = (Data) => {
  class Darshan extends React.Component {
    state = {
      Name: "darsh",
      age: 22,
    };
    render() {
      return <Data details={this.state} />;
    }
  }
  return Darshan;
};

export default Home;
