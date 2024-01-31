import './TextBox01.css';
import avatar from '../assets/avatar.jpg'


export default function TextBox01() {
  return (
      <section className="text-box">
        <div className="text-container">
          <img
            // src="https://www.hannoversche.de/stgc/assets/images/melanie.webp?v=1.2.0"
            src={avatar}
            alt="img"
            height="80"
            width="80"
            className="avatar"
          />

          <div className="box-container">
            <p>
              Ich weiß, nach dem Alter fragt man eigentlich nicht, aber die
              Beitrags­höhe für die Sterbe­geld­ver­sicherung richtet sich nach
              Ihrem Alter bei Vertrags­abschluss.
            </p>
          </div>
        </div>
      </section>
  );
}
