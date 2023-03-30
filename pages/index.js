import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
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
            }}
          >
            MARICONASO
          </button>
          <button
            className="button"
            onClick={() => {
              window.alert("Por favor, seleccione otra opción");
            }}
          >
            HETERILLO
          </button>
          <button
            className="button"
            onClick={() => {
              window.alert("Es posible");
            }}
          >
            CURIOSETE
          </button>
        </p>
      </main>

      <Footer />
    </div>
  );
}
