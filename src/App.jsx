import "./App.css";

import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";
import { useState } from "react";

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <>
      {showThankYouPage ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThankYouPage={setShowThankYouPage}
        />
      )}
    </>
  );
}

export default App;
