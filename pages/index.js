import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useState } from "react";

export default function Home() {
  const [showLastOption, setShowLastOption] = useState(false);

  function handleClick() {
    setShowLastOption(true);
  }

  return (
    <div className="container">
      <Head>
        <title>Homosexógrafo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header title="Por favor, elija su voto respecto a la sexualidad de Antonio" />
        <p className="description">
          <button
            className="button"
            onClick={() => {
              window.alert("Enhorabuena, estás en la opción correcta");
              window.localStorage.setItem("option", "MARICONASO");
            }}
          >
            MARICONASO
          </button>
          <button
            className="button"
            onClick={() => {
              window.alert("Por favor, seleccione otra opción");
              window.localStorage.setItem("option", "HETERILLO");
            }}
          >
            HETERILLO
          </button>
          <button
            className="button"
            onClick={() => {
              window.alert("Es posible");
              window.localStorage.setItem("option", "CURIOSETE");
            }}
          >
            CURIOSETE
          </button>
        </p>
        {!showLastOption && (
          <button className="button" onClick={handleClick}>
            Mostrar opción anterior
          </button>
        )}
        {showLastOption && (
          <p>
            {window.localStorage.getItem("option") != null
              ? `Tu anterior opción fue: ${window.localStorage.getItem("option")}`
              : `No hay registros`}
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
