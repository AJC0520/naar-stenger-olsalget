import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  
  return (
    <footer>
      <nav className="footer-nav">
        <Link 
          to="/" 
          className={location.pathname === "/" ? "active" : ""}
        >
          Hjem
        </Link>
        <span className="footer-separator">•</span>
        <Link 
          to="/sporsmal" 
          className={location.pathname === "/sporsmal" ? "active" : ""}
        >
          Spørsmål
        </Link>
        <span className="footer-separator">•</span>
        <Link 
          to="/historie" 
          className={location.pathname === "/historie" ? "active" : ""}
        >
          Historie
        </Link>
      </nav>
      <a href="https://github.com/AJC0520/naar-stenger-olsalget">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          alt="github logo"
          width="30px"
        />
      </a>{" "}
    </footer>
  );
}
