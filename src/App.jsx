import Footer from "./components/Footer";
import Olsalg from "./components/Olsalg";
import CookieConsent from "./components/CookieConsent";
import BeerBubbles from "./components/BeerBubbles";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="main-content">
      <BeerBubbles />
      <div className="content-wrapper">
        <h1 className="main-title">Når stenger ølsalget?</h1>
        <Olsalg />
        <FAQ />
      </div>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
