// src/ui/Button.jsx
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ to, children }) {
  return (
    <div className="container-next">
      <Link to={to} className="next-btn">
        {children}
      </Link>
    </div>
  );
}
