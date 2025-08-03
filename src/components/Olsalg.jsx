import { useEffect, useState } from "react";

export default function Olsalg() {
  const [status, setStatus] = useState("");
  const [timeleft, setTimeleft] = useState("");

  useEffect(() => {
    let intervalId;

    async function checkBeerStatus() {
      const now = new Date();
      const todayISO = now.toISOString().split("T")[0];
      const day = now.getDay();
      const year = now.getFullYear();

      try {
        const response = await fetch(
          `https://webapi.no/api/v1/holidays/${year}`
        );
        const data = await response.json();
        const holidays = data.data;

        const isHolidayToday = holidays.some((holiday) =>
          holiday.date.startsWith(todayISO)
        );

        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowISO = tomorrow.toISOString().split("T")[0];
        const isHolidayTomorrow = holidays.some((holiday) =>
          holiday.date.startsWith(tomorrowISO)
        );

        if (isHolidayToday || day === 0) {
          setStatus("❌ Ølsalget er stengt i dag)");
          setTimeleft("");
          return;
        }

        let closingHour = (day === 6 || isHolidayTomorrow) ? 18 : 20;
        const closingTime = new Date(now);
        closingTime.setHours(closingHour, 0, 0, 0);

        if (now >= closingTime) {
          setStatus("❌ Ølsalget er STENGT");
          setTimeleft("");
          return;
        }

        intervalId = setInterval(() => {
          const now = new Date();
          const timeDiff = closingTime - now;

          if (timeDiff <= 0) {
            setStatus("❌ Ølsalget er nå STENGT");
            setTimeleft("");
            clearInterval(intervalId);
            return;
          }

          const hours = Math.floor(timeDiff / 1000 / 60 / 60);
          const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
          const seconds = Math.floor((timeDiff / 1000) % 60);

          setStatus("✅ Ølsalget er åpent");
          setTimeleft(`Tid igjen: ${hours}t ${minutes}m ${seconds}s`);
        }, 1000);
      } catch (error) {
        console.error("Feil ved henting av helligdager:", error);
        setStatus("⚠️ Klarte ikke hente helligdager");
        setTimeleft("");
      }
    }

    checkBeerStatus();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p className="feedback-status">{status}</p>
      <p className="timeleft-status">{timeleft}</p>
    </>
  );
}
