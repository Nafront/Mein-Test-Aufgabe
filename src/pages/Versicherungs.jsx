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
    // Konvertierung des Geburtsdatums aus dem Context in ein Date-Objekt
    const geburtsdatumParts = geburtsdatum.split(".");
    const geburtsdatumDate = new Date(
      geburtsdatumParts[2],
      geburtsdatumParts[1] - 1,
      geburtsdatumParts[0]
    );

    // Berechnung des Alters basierend auf dem Geburtsdatum
    const heute = new Date();
    let alter = heute.getFullYear() - geburtsdatumDate.getFullYear();
    const m = heute.getMonth() - geburtsdatumDate.getMonth();
    if (m < 0 || (m === 0 && heute.getDate() < geburtsdatumDate.getDate())) {
      alter--;
    }

    // Überprüfung, ob das Alter zwischen 50 und 80 Jahren liegt
    if (alter >= 50 && alter <= 80) {
      const dataToSend = {
        geburtsdatum: `${geburtsdatum.day}.${geburtsdatum.month}.${geburtsdatum.year}`,
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
      }
    } else {
      console.error("Das Alter muss zwischen 50 und 80 Jahren liegen.");
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
