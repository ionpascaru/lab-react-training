import React, { Component } from "react";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>

        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>

        <h1>CreditCard</h1>

        <h1>Rating</h1>

        <h1>DriverCard</h1>

        <h1>ClickablePicture</h1>

        <h1>Dice</h1>

        <h1>Carousel</h1>

        <h1>NumbersTable</h1>
      </div>
    );
  }
}

export default App;
