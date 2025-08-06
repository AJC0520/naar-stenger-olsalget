import Footer from "./components/Footer";
import Olsalg from "./components/Olsalg";
import CookieConsent from "./components/CookieConsent";

function App() {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <h1 className="main-title">Når stenger ølsalget?</h1>
        <Olsalg />
      </div>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
