import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Jumbotron/>
        <div className= "row">
          <div className="col-sm">
            <Card />
          </div>
          <div className="col-sm">
            <Card />
          </div>
          <div className="col-sm">
            <Card />
          </div>
          <div className="col-sm">
            <Card />
          </div>
        </div>
      </main>
     <Footer/>
    </>
  );
};

export default Home;
