// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/AppContext";
import TextBox02 from "../components/TextBox02";
import Aside from "../components/Aside";
import Slider from "../components/Slider";
import Button from "../ui/Button";
import "./Versicherungs.css";

export default function Versicherungs() {
  // const [sliderValue, setSliderValue] = useState(100);
    const { geburtsdatum, sliderValue, setSliderValue } = useAppContext();

    const navigate = useNavigate();
     function navigationHandler() {
       navigate("/");
     }

  // console.log(sliderValue);

  const handleSubmit = async () => {
    const dataToSend = {
      tarif: {
        name: "sterbegeld",
      },
      versicherungsnehmer: {
        geburtsdatum: `${geburtsdatum.day}.${geburtsdatum.month}.${geburtsdatum.year}`,
      },
      vertragsdaten: {
        endalter: 85,
        versicherungsbeginn: "01.10.2023",
        versicherungssumme: sliderValue,
        zahlungsweise: "monatlich",
      },
    };

    try {
      const response = await fetch(
        "https://t3a.hannoversche.de/api/v2/taa/quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht ok.");
      }
      console.log('response :', response);

      const responseData = await response.json();
      console.log(responseData);
      navigate("/tarif"); // Navigieren Sie zur nächsten Seite nach erfolgreichem API-Aufruf
    } catch (error) {
      console.error("Fehler beim Senden der Daten:", error);
    }
  };
  console.log("sliderValue : ", sliderValue);

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
          <Button className="next_btn" onClick={handleSubmit}>
            Weiter
          </Button>
        </div>
      </div>
    </section>
  );
}
