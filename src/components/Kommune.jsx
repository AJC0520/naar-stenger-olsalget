import { useEffect, useState } from "react";

export default function Kommune({ postalCode }) {
  const [kommune, setKommune] = useState("");

  useEffect(() => {
    async function getKommune(postalCode) {
      const response = await fetch(
        `https://ws.geonorge.no/adresser/v1/sok?sok=${postalCode}`
      );
      const data = await response.json();

      data.adresser.forEach((element) => {
        if (element.postnummer === postalCode) {
          setKommune(element.kommunenavn);
          return;
        } else {
          setKommune("Dette postnummeret eksisterer ikke. Prøv igjen!");
        }
      });
    }

    if (postalCode) {
      getKommune(postalCode);
    }
  }, [postalCode]);
  return <h1>{kommune ? kommune : "Laster kommune... "}</h1>;
}
