import { useState } from "react";
import phrases from "../phrase.json"; // Asegúrate de que la ruta del archivo JSON sea correcta

function App() {
  const [phrase, setPhrase] = useState("");

  //Todo: crear una const ArrayImagenes que contenga el link de las imágenes de las frases
  //Todo: Creear una función getRandomImage, que tome el link de la imagen y lo renderice en la página
  //Todo: Hacer diseño de la página tanto como "desk and mobile"
  //Todo: Componetizar la página
  //Todo: creear nuevas funciones apartes con algo "inovador"
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    setPhrase(`${randomPhrase.phrase} - ${randomPhrase.author}`);
  };

  return (
    <div>
      <button onClick={getRandomPhrase}>Mostrar Frase</button>
      {phrase && (
        <div>
          <p>{phrase}</p>
        </div>
      )}
    </div>
  );
}

export default App;
