import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useState } from "react";
import { options } from "../constants";
import LoginModal from "@components/login-modal";

export default function Home() {
  const [showLastOption, setShowLastOption] = useState(false);
  const [selectedOption, setselectedOption] = useState(null);

  function handleClick() {
    setShowLastOption(true);
  }

  return (
    <div>
      <Head>
        <title>Homosexógrafo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <LoginModal show/>

      <header>
        <div className="finish-buttons">
          {selectedOption != null && selectedOption !== options.MARICONASO && (
            <button
              className="button"
              onClick={() => {
                setselectedOption(null);
              }}
            >
              Me'quivocao
            </button>
          )}
          {selectedOption != null &&
            (selectedOption === options.MARICONASO ||
              selectedOption === options.CURIOSETE) && (
              <button className="button">Notificar a Alba</button>
            )}
        </div>
      </header>
      <div className="container">
        <main>
          {selectedOption == null && (
            <Header title="Por favor, elija su voto respecto a la sexualidad de Antonio" />
          )}
          <p className="description">
            {selectedOption == null && (
              <div>
                <button
                  className="button"
                  onClick={() => {
                    window.alert("Enhorabuena, estás en la opción correcta");
                    window.localStorage.setItem("option", "MARICONASO");
                    setselectedOption(options.MARICONASO);
                  }}
                >
                  MARICONASO
                </button>
                <button
                  className="button"
                  onClick={() => {
                    window.alert("Por favor, seleccione otra opción");
                    window.localStorage.setItem("option", "HETERILLO");
                    setselectedOption(options.HETERILLO);
                  }}
                >
                  HETERILLO
                </button>
                <button
                  className="button"
                  onClick={() => {
                    window.alert("Es posible");
                    window.localStorage.setItem("option", "CURIOSETE");
                    setselectedOption(options.CURIOSETE);
                  }}
                >
                  CURIOSETE
                </button>
              </div>
            )}
          </p>
          {!showLastOption && (
            <button className="button" onClick={handleClick}>
              Mostrar opción anterior
            </button>
          )}
          {showLastOption && (
            <p>
              {window.localStorage.getItem("option") != null
                ? `Tu anterior opción fue: ${window.localStorage.getItem(
                    "option"
                  )}`
                : `No hay registros`}
            </p>
          )}
        </main>
        <Footer selectedOption={selectedOption} />
      </div>
    </div>
  );
}
