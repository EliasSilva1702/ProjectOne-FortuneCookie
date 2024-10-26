import { useState } from "react";
import phrases from "../phrase.json";
import "./App.css";
function App() {
  const [phrase, setPhrase] = useState("");
  const [image, setImage] = useState("");

  //Todo: Crear una const ArrayImagenes que contenga el link de las imágenes de las frases
  const arrayImagenes = [
    "./Imgs/fondo1.png",
    "./Imgs/fondo2.png",
    "./Imgs/fondo3.png",
    "./Imgs/fondo4.png",
  ];

  //Todo: Crear una función getRandomImage, que tome el link de la imagen y lo renderice en la página
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return `${phrases[randomIndex].phrase} - ${phrases[randomIndex].author}`;
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * arrayImagenes.length);
    return arrayImagenes[randomIndex];
  };

  //Todo: Crear diseño de la página tanto como "desk and mobile"
  const changeContent = () => {
    setImage(getRandomImage());
    setPhrase(getRandomPhrase());
  };

  const backgroundImage = `url(${image})`;

  return (
    <div
      style={{ backgroundImage }}
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-4 justify-center items-center text-center w-full"
    >
      <h1 className="text-4xl font-semibold text-red-500 mb-4">
        Rueda de la Fortuna
      </h1>

      <picture>
        <img
          src="./Imgs/rectangle2.svg"
          alt="Rectangle"
          className="w-full h-full -z-10 object-cover"
        />
      </picture>

      //todo: realizar diseño de la frase
      {phrase && (
        <div className="text-2xl font-bold mb-4 absolute top-60 max-w-lg text-center p-4">
          <p>{phrase}</p>
        </div>
      )}

      <button
        onClick={changeContent}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Mostrar Frase
      </button>
    </div>
  );
}

export default App;
