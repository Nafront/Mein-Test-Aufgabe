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
      geburtsdatum: `${geburtsdatum}`, // Annahme, dass geburtsdatum bereits im korrekten Format ist
      versicherungssumme: sliderValue,
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

      const responseData = await response.json();
      console.log(responseData);
      
      navigate("/tarif"); // Navigieren Sie zur nächsten Seite nach erfolgreichem API-Aufruf
    } catch (error) {
  console.error("Fehler beim Senden der Daten:", error);
  if (error.response) {
    // Der Server hat eine Antwort mit einem Fehlerstatus zurückgegeben
    console.error("Serverantwort:", error.response.data);
    console.error("Statuscode:", error.response.status);
  } else if (error.request) {
    // Der Request wurde gesendet, aber keine Antwort erhalten
    console.error("Keine Antwort vom Server erhalten:", error.request);
  } else {
    // Ein Fehler beim Aufbau des Requests
    console.error("Fehler beim Aufbau des Requests:", error.message);
  }
}
  };

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
