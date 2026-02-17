import Olsalg from "../components/Olsalg";
import BeerBubbles from "../components/BeerBubbles";

export default function Home() {
  return (
    <>
      <BeerBubbles />
      <div className="content-wrapper">
        <h1 className="main-title">Når stenger ølsalget?</h1>
        <Olsalg />
      </div>
    </>
  );
}
