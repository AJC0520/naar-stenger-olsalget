import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Når stenger ølsalget i dag?",
      answer: "På hverdager (mandag-fredag) må ølsalget avsluttes senest klokken 20:00. På lørdager og dagen før helligdager stenger salget senest klokken 18:00. På søndager, helligdager, 1. mai og 17. mai er det ikke tillatt å selge øl. Sjekk nedtellingen over for å se nøyaktig hvor lenge ølsalget er åpent i dag."
    },
    {
      question: "Når stenger ølsalget på lørdag?",
      answer: "Ølsalget må avsluttes senest klokken 18:00 på lørdager i hele Norge. Dette er regulert av alkoholloven og gjelder alle dagligvarebutikker, uansett kjede."
    },
    {
      question: "Når stenger ølsalget dagen før en helligdag?",
      answer: "Dagen før en helligdag må ølsalget stenges senest klokken 18:00. Dette gjelder også hverdager som kommer før en helligdag. Enkelte kommuner kan ha innskrenket dette til klokken 15:00, så sjekk lokale regler i din kommune."
    },
    {
      question: "Når åpner ølsalget på hverdager?",
      answer: "På hverdager kan ølsalget starte tidligst klokken 08:00, men de fleste butikker begynner å selge øl fra klokken 09:00. Den enkelte kommune bestemmer de eksakte åpningstidene innenfor rammen 08:00-20:00."
    },
    {
      question: "Er ølsalget åpent på søndager og helligdager?",
      answer: "Nei, salg av alkohol er ikke tillatt på søndager, helligdager, 1. mai og 17. mai i Norge. Dette gjelder for all alkohol over 2,5% alkoholprosent og er fastsatt i alkoholloven."
    },
    {
      question: "Hvilke regler gjelder for ølsalg?",
      answer: "Ølsalg er regulert av alkoholloven og lokale kommunale forskrifter. Reglene gjelder for all alkoholholdig drikke over 2,5% alkoholprosent. Formålet med reguleringene er å redusere alkoholforbruket og negative helsekonsekvenser."
    },
    {
      question: "Kan kommunen endre åpningstidene for ølsalg?",
      answer: "Ja, den enkelte kommune kan innskrenke salgstiden, men må holde seg innenfor lovens rammer. På hverdager kan kommunen sette åpningstider mellom 08:00 og 20:00. Kommunen kan ikke tillate salg utenfor disse tidsrammene."
    },
    {
      question: "Gjelder disse reglene alle butikker?",
      answer: "Ja, reglene for ølsalg gjelder alle dagligvarebutikker i Norge som har salgsbevilgning. Dette inkluderer alle kjeder som Rema 1000, Kiwi, Coop, Meny, Extra, Joker og Bunnpris. Vinmonopolet har egne åpningstider for vin og brennevin."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Ofte stilte spørsmål om ølsalg</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              <span className="faq-icon" aria-hidden="true">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
