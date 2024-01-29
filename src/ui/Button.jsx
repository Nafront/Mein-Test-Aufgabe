import { Link } from "react-router-dom";
import "./Button.css";
// Button.jsx
export default function Button({ onClick, children, to }) {
  return (
    <div className="container-next">
      {to ? (
        <Link to={to} className="next-btn">
          {children}
        </Link>
      ) : (
        <button onClick={onClick} className="next-btn">
          {children}
        </button>
      )}
    </div>
  );
}