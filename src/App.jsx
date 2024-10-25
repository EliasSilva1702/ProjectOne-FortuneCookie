import { useState } from "react";
import phrases from "../phrase.json"; // Asegúrate de que la ruta del archivo JSON sea correcta

function App() {
  const [phrase, setPhrase] = useState("");

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    setPhrase(`${randomPhrase.phrase} - ${randomPhrase.author}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={getRandomPhrase} style={{ padding: "10px", fontSize: "16px" }}>
        Mostrar Frase
      </button>
      {phrase && (
        <div style={{ marginTop: "20px", fontSize: "18px", fontStyle: "italic" }}>
          <p>{phrase}</p>
        </div>
      )}
    </div>
  );

  
}

export default App;
