import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/AppContext";
import { FaChevronLeft } from "react-icons/fa6";
import Aside from "../components/Aside";
import "./TarifPage.css";
import TarifBoxContent from "../components/TarifBoxContent";

export default function TarifPage() {
  const { apiResponse, setIsLoading } = useAppContext();
  console.log("api : ", apiResponse);

  const navigate = useNavigate();

  const monatlicherBeitrag =
    apiResponse.hauptprodukt?.sterbegeld?.beitraege?.monatlich?.netto;

  setIsLoading(false); // Setzt den Ladezustand zurück, bevor Sie navigieren

  function navigationHandler() {
    navigate("/versicherungs");
  }

  return (
    <section className="tarif">
      <Aside />
      <div className="container_t">
        <div className="icon_wrapper">
          <FaChevronLeft onClick={navigationHandler} className="back_icon" />
        </div>
        <header className="header_t">
          <h1 className="tarif_beitrag">
            {monatlicherBeitrag ? `${monatlicherBeitrag} €` : ""}
          </h1>
          <h4>Monatlich</h4>
        </header>
        <div className="wrapper_box">
          <div className="rotate"></div>
          <TarifBoxContent monatlicherBeitrag={monatlicherBeitrag} />
        </div>
      </div>
    </section>
  );
}
