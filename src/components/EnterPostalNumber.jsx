import { useState } from "react";

export default function EnterPostalNumber({ onSubmit }) {
  const [postalCode, setPostalCode] = useState("");

  function submitPostal(e) {
    e.preventDefault();
    onSubmit(postalCode);
  }

  function handleInputChange(e) {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setPostalCode(onlyDigits);
  }
  return (
    <div className="postal-main-container">
      <div className="pin-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 20C20.9167 20 21.7014 19.6736 22.3542 19.0208C23.0069 18.3681 23.3333 17.5833 23.3333 16.6667C23.3333 15.75 23.0069 14.9653 22.3542 14.3125C21.7014 13.6597 20.9167 13.3333 20 13.3333C19.0833 13.3333 18.2986 13.6597 17.6458 14.3125C16.9931 14.9653 16.6667 15.75 16.6667 16.6667C16.6667 17.5833 16.9931 18.3681 17.6458 19.0208C18.2986 19.6736 19.0833 20 20 20ZM20 32.25C23.3889 29.1389 25.9028 26.3125 27.5417 23.7708C29.1806 21.2292 30 18.9722 30 17C30 13.9722 29.0347 11.4931 27.1042 9.56251C25.1736 7.63195 22.8056 6.66668 20 6.66668C17.1944 6.66668 14.8264 7.63195 12.8958 9.56251C10.9653 11.4931 10 13.9722 10 17C10 18.9722 10.8194 21.2292 12.4583 23.7708C14.0972 26.3125 16.6111 29.1389 20 32.25ZM20 36.6667C15.5278 32.8611 12.1875 29.3264 9.97917 26.0625C7.77084 22.7986 6.66667 19.7778 6.66667 17C6.66667 12.8333 8.00695 9.5139 10.6875 7.04168C13.3681 4.56945 16.4722 3.33334 20 3.33334C23.5278 3.33334 26.6319 4.56945 29.3125 7.04168C31.9931 9.5139 33.3333 12.8333 33.3333 17C33.3333 19.7778 32.2292 22.7986 30.0208 26.0625C27.8125 29.3264 24.4722 32.8611 20 36.6667Z"
            fill="black"
          />
        </svg>
      </div>
      <p className="postal-caption">
        Skriv inn postnummeret ditt for å se ølsalgstider i din kommune
      </p>
      <div className="input-container">
        <p className="input-label">Postnummer</p>
        <input
          id="postal-code"
          className="input-field"
          value={postalCode}
          onChange={handleInputChange}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={4}
          placeholder="1234"
          aria-describedby="postal-code-help"
        />
        <button className="postal-entry-button" onClick={submitPostal} disabled={postalCode.length != 4}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M17.15 18.375L11.6375 12.8625C11.2 13.2125 10.6969 13.4896 10.1281 13.6937C9.55937 13.8979 8.95417 14 8.3125 14C6.72292 14 5.3776 13.4495 4.27656 12.3484C3.17552 11.2474 2.625 9.90208 2.625 8.3125C2.625 6.72292 3.17552 5.3776 4.27656 4.27656C5.3776 3.17552 6.72292 2.625 8.3125 2.625C9.90208 2.625 11.2474 3.17552 12.3484 4.27656C13.4495 5.3776 14 6.72292 14 8.3125C14 8.95417 13.8979 9.55937 13.6937 10.1281C13.4896 10.6969 13.2125 11.2 12.8625 11.6375L18.375 17.15L17.15 18.375ZM8.3125 12.25C9.40625 12.25 10.3359 11.8672 11.1016 11.1016C11.8672 10.3359 12.25 9.40625 12.25 8.3125C12.25 7.21875 11.8672 6.28906 11.1016 5.52344C10.3359 4.75781 9.40625 4.375 8.3125 4.375C7.21875 4.375 6.28906 4.75781 5.52344 5.52344C4.75781 6.28906 4.375 7.21875 4.375 8.3125C4.375 9.40625 4.75781 10.3359 5.52344 11.1016C6.28906 11.8672 7.21875 12.25 8.3125 12.25Z"
              fill="white"
            />
          </svg>
          Finn salgstider
        </button>
      </div>
    </div>
  );
}
