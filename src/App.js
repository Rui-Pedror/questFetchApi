import axios from "axios";
import React, { useState } from "react";
import SimpsonCard from "./components/SimpsonCard";

function App() {
  const [quote, setQuote] = useState(null);

  const getQuote = () => {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then((response) => response.data)
      .then((data) => {
        setQuote(data[0]);
      });
  };

  return (
    <>
      <div>
        <button type="button" onClick={getQuote}>
          Get quote
        </button>
      </div>
      {quote && (
        <SimpsonCard
          quote={quote.quote}
          character={quote.character}
          image={quote.image}
        />
      )}
    </>
  );
}

export default App;
