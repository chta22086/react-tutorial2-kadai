import { useState } from "react";

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

export default function App() {
    const [showStory,setShowStory] = useState(false);
    const [xItem,setXItem] = useState("");
    const [yItem,setYItem] = useState("");
    const [zItem,setZItem] = useState("");
    const [ukus,setUkus] = useState("us");

    const generateRandomStory = () => {
        const xItems = ["Willy the Goblin","Big Daddy","Father Chistmas"];
        const yItems = ["the soup kitchen","Disneyland","the White House"];
        const zItems = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

        const weight = ukus === "uk" ? "stone":"pound";
        const temperature = ukus === "uk" ? "Celsius":"Fahrenheit";

        setXItem(randomValueFromArray(xItems));
        setYItem(randomValueFromArray(yItems));
        setZItem(randomValueFromArray(zItems));
        setShowStory(true);
    };

    const UkusChange = (event) => {
      setUkus(event.target.value);
    };

    return (
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input type="text" placeholder="" />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"}onChange={UkusChange} />
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"}onChange={UkusChange} />
        </div>
        <div>
          <button onClick={generateRandomStory}>Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was 94 {ukus === "uk" ? "Celsius":"Fahrenheit"} outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            Bob saw the whole thing, but was not surprised — {xItem} weighs 300 
            {ukus === "uk" ? "stone":"pounds"}, and it was a hot day.
          </p>
        )}
      </>
    );
  }