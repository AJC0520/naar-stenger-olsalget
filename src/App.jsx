import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";
import FAQPage from "./pages/FAQPage";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sporsmal" element={<FAQPage />} />
          <Route path="/historie" element={<History />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}

export default App;
