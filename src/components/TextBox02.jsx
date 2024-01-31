import './TextBox02';
import avatar from '../assets/avatar.jpg'

export default function TextBox02() {
  return (
    <div className="text-box">
      <div className="text-container">
        <img
          // src="https://www.hannoversche.de/stgc/assets/images/melanie.webp?v=1.2.0"
          src={avatar}
          alt="img"
          height="70"
          width="70"
          className="avatar"
        />
        <div className="box-container">
          <p className="box_container_text">
            Sie sind sich unsicher, wie hoch die Versicherungssumme sein sollte?
            Hier eine kleine Orientierungshilfe: Laut Statistik liegen
            Bestattungskosten durchschnittlich bei
            <span> 6.000 bis 8.000 </span>Euro. Zusätzlich können weitere Kosten
            für die Wohnungsauflösung, Grabpflege oder einen Notar anfallen
          </p>
        </div>
      </div>
    </div>
  );
}
