import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import TextBox01 from "../components/TextBox01";
import Aside from "../components/Aside";
import Button from "../ui/Button";
import InputField from "../components/InputField";
import { useAppContext } from "../components/AppContext";

export default function Home() {
  const { geburtsdatum, setGeburtsdatum } = useAppContext(); // Zugriff auf Zustände und Funktionen

  const navigate = useNavigate();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (validateInput()) {
      setGeburtsdatum(`${day}.${month}.${year}`); // Aktualisieren des Geburtsdatums im Context
      navigate("/versicherungs");
    }
    console.log(geburtsdatum);
  };

  const validateInput = () => {
    if (!day || !month || !year) {
      setError("Bitte fülle alle Felder aus.");
      return false;
    }

    const numericDay = parseInt(day, 10);
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);

    if (
      isNaN(numericDay) ||
      isNaN(numericMonth) ||
      isNaN(numericYear) ||
      numericDay < 1 ||
      numericDay > 31 ||
      numericMonth < 1 ||
      numericMonth > 12 ||
      numericYear < 1900
    ) {
      // setError("Ungültige Eingabe. Bitte überprüfe die Daten.");
      setError("Bitte geben Sie ein gültiges Datum im Format TT.MM.JJJJ ein.");
      return false;
    }
    // Berechung des Alters und Überprüfung, ob es im gültigen bereich liegt
    const currentDate = new Date();
    const userBirthdate = new Date(
      `${numericYear}-${numericMonth}-${numericDay}`
    );

    const userAge = currentDate.getFullYear() - userBirthdate.getFullYear();

    if (userAge < 50 || userAge > 80) {
      setError("Das Geburtsdatum muss zwischen 50 und 80 Jahren liegen.");
      return false;
    }

    setError("");
    return true;
  };

  return (
    <section id="section_geburt">
      <Aside />
      <div className="container">
        <div className="headline">
          <h1>
            Zum Start benötigen wir <strong>Ihr Geburtsdatum</strong>
          </h1>
        </div>
        <form className="form">
          <div className="form-container">
            <div className="form-element">
              <InputField
                type="number"
                name="day"
                placeholder="Tag"
                value={day}
                // onChange={(e) => setDay(e.target.value)}
                onChange={(e) => {
                  console.log("Day Input Value:", e.target.value); // Hier wird der Wert ausgegeben
                  setDay(e.target.value);
                }}
                error={error}
              />
              <InputField
                type="number"
                name="month"
                placeholder="Monat"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                error={error}
              />
              <InputField
                type="number"
                name="year"
                placeholder="Jahr"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                error={error}
              />
            </div>
          </div>
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
        </form>
        <TextBox01 />

        <div className="container-next">
          <Button to="/versicherungs" className="next_btn" onClick={handleNext}>
            <span>Weiter</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
