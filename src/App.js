import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
function Photo({ src, price }) {
  return (
    <div className="center">
      <img className="item" src={src} />
      <div> Price: ${price}
      </div>
      Size
      <select id="Sizes">
        <option value="volvo">Small</option>
        <option value="saab">Medium</option>
        <option value="opel">Large</option>
        <option value="audi">XLarge</option>
      </select>
    </div>
  );
}
function App() {
  const [hidden, setHidden] = useState("Home");
  const items = [
    { image: "Pink0.png" , price: 25},
    { image: "BlueHaze.png" , price: 50},
    { image: "PinkBrush.png" , price: 28},
    { image: "ConcreteRose.png" , price: 100},
    { image: "purpleHaze.png" , price: 2},
    { image: "Fire.png" , price: 10},
    { image: "LoveLetter.png" , price: 15},
    { image: "Pinklace.png" , price: 30},
    { image: "GreenLeaves.png" , price: 5},
  ];
  return (
    <header className="App-header">
      <div className="bannercenter">
        <img className="banner" src="alllureathleticsbanner.png" />
      </div>
      <Button
        onClick={() => {
          setHidden("About");
        }}
        variant="contained"
        color="primary"
      >
        About
      </Button>
      <Button
        onClick={() => {
          setHidden("Contact");
        }}
        variant="contained"
        color="primary"
      >
        Contact
      </Button>
      {hidden === "Home" && (
        <div className="photorow wrap">
          {items.map((item) => (
            <Photo src={item.image} price={item.price} />
          ))}
        </div>
      )}
      {hidden === "About" && <div>This is a different page</div>}
      {hidden === "Contact" && <div>This is the contact page</div>}
    </header>
  );
}

export default App;
