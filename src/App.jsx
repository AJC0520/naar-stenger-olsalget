import Footer from "./components/Footer";
import Olsalg from "./components/Olsalg";
function App() {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <h1 className="main-title">Når stenger ølsalget?</h1>
        <Olsalg />
      </div>
      <Footer />
    </div>
  );
}

export default App;
