import FAQ from "../components/FAQ";
import BeerBubbles from "../components/BeerBubbles";

export default function FAQPage() {
  return (
    <>
      <BeerBubbles />
      <div className="content-wrapper">
        <h1 className="main-title">Ofte stilte spørsmål</h1>
        <FAQ />
      </div>
    </>
  );
}
