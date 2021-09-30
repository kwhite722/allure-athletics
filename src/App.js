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
    { image: "Pink0.png" , price: 28},
    { image: "BlueHaze.png" , price: 28},
    { image: "PinkBrush.png" , price: 28},
    { image: "ConcreteRose.png" , price: 28},
    { image: "purpleHaze.png" , price: 28},
    { image: "Fire.png" , price: 28},
    { image: "LoveLetter.png" , price: 28},
    { image: "Pinklace.png" , price: 28},
    { image: "GreenLeaves.png" , price: 28},
    { image: "Smoke.png" , price: 28},
    { image: "RainbowBraids.png" , price: 28},
    { image: "GreenHaze.png" , price: 28},
  ];
  return (
    <header className="App-header">
      <div className="bannercenter">
        <img className="banner" src="allureathleticsbanner.png" />
      </div>
      <Button id="newInBtn"
        onClick={() => {
          setHidden("AboutNew");
        }}
        variant="contained"
        color="primary"
      >
        NEW IN
      </Button>
      <Button id="leggingsBtn"
        onClick={() => {
          setHidden("Contact");
        }}
        variant="contained"
        color="primary"
      >
        LEGGINGS
      </Button>
      <Button id="cropHoodiesBtn"
        onClick={() => {
          setHidden("AboutNew");
        }}
        variant="contained"
        color="primary"
      >
      CROP HOODIES
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
