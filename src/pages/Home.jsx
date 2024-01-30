import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import TextBox01 from "../components/TextBox01";
import Aside from "../components/Aside";
import Button from "../ui/Button";
import InputField from "../components/InputField";
import { useAppContext } from "../components/AppContext";

export default function Home() {
  const { setGeburtsdatum, error, setError } = useAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });
   
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

  const handleNext = () => {
    if (validateInput()) {
      const { day, month, year } = formData;
      setGeburtsdatum(`${day}.${month}.${year}`);

      navigate("/versicherungs");
    }
  };

  const validateInput = () => {
    const { day, month, year } = formData;
    if (!day || !month || !year) {
      setError("Bitte fülle alle Felder aus.");
      return false;
    }

    const numericDay = parseInt(day, 10);
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);
    const userBirthdate = new Date(numericYear, numericMonth - 1, numericDay);

    // Überprüfung auf ungültige Daten (z.B. 30. Februar)
    if (
      userBirthdate.getFullYear() !== numericYear ||
      userBirthdate.getMonth() + 1 !== numericMonth ||
      userBirthdate.getDate() !== numericDay
    ) {
      setError("Bitte geben Sie ein gültiges Datum im Format TT.MM.JJJJ ein.");
      return false;
    }

    // Aktuelles Datum erstellen
    const currentDate = new Date();
    // Das Alter des Benutzers berechnen, indem das Geburtsjahr subtrahiert wird
    let userAge = currentDate.getFullYear() - userBirthdate.getFullYear();
    // Überprüfen, ob der Geburtstag dieses Jahr bereits vergangen ist
    const isBirthdayPassedThisYear =
      currentDate.getMonth() > userBirthdate.getMonth() ||
      (currentDate.getMonth() === userBirthdate.getMonth() &&
        currentDate.getDate() >= userBirthdate.getDate());
    if (!isBirthdayPassedThisYear) {
      userAge--; // Wenn der Geburtstag dieses Jahr noch nicht war, ein Jahr abziehen
    }

    if (userAge < 50 || userAge > 80) {
      setError("Das Geburtsdatum muss zwischen 50 und 80 Jahren liegen.");
      return false;
    }

    setError("");
    return true;
  };

  return (
    <section
      id="section_geburt"
      // style={{ padding: "20px" }}
    >
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
                type="text"
                name="day"
                placeholder="Tag"
                value={formData.day}
                onChange={handleInputChange}
                error={error}
              />
              <InputField
                type="text"
                name="month"
                placeholder="Monat"
                value={formData.month}
                onChange={handleInputChange}
                error={error}
              />
              <InputField
                type="text"
                name="year"
                placeholder="Jahr"
                value={formData.year}
                onChange={handleInputChange}
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
