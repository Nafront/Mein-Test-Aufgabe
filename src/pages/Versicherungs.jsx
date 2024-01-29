import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Versicherungs.css";
import TextBox02 from "../components/TextBox02";
import Aside from "../components/Aside";

export default function Versicherungs() {
  const [sliderValue, setSliderValue] = useState(100);
    const navigate = useNavigate();
     function navigationHandler() {
       navigate("/");
     }

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
  };

    const handleSliderBlur = () => {
      // Runden auf den nächsten Schritt von 500
      const roundedValue = Math.round(sliderValue / 500) * 500;

      if (roundedValue < 4000) {
        setSliderValue(4000);
      } else if (roundedValue > 15000) {
        setSliderValue(15000);
      } else {
        setSliderValue(roundedValue);
      }
    };
  console.log(sliderValue);

  return (
    <section className="section_v">
      <Aside />
      <div className="container_v">
        <p>
         <button onClick={navigationHandler}>Back</button>
        </p>
        <header className="title">
          <h1>
            Wie hoch soll die <strong>Versicherung</strong> sein?
          </h1>
        </header>
        <div className="range">
          <div className="sliderValue">
            <span>{sliderValue} </span>
          </div>
          <div className="field">
            <input
              type="range"
              min="4000"
              max="15000"
              step="500"
              value={sliderValue}
              onChange={handleSliderChange}
              onMouseUp={handleSliderBlur}
              className="custom-slider"

              //   defaultValue="50"
            />
            <div className="zahl_wrapper">
              <span className="value left">4000 €</span>
              <span className="value right">15000 €</span>
            </div>
          </div>
        </div>
        <TextBox02 />

        <div className="container-next">
          <Link to="tarif">
            <button className="next_btn">
              <span>Weiter</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
