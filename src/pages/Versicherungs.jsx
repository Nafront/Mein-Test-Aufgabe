import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Versicherungs.css";
import TextBox02 from "../components/TextBox02";
import Aside from "../components/Aside";
import Slider from "../components/Slider";

export default function Versicherungs() {
  const [sliderValue, setSliderValue] = useState(100);
    const navigate = useNavigate();
     function navigationHandler() {
       navigate("/");
     }

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
            <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
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
