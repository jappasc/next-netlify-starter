import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header title="Estoy aburrido del puto curso" />
        <p className="description">
          Puedes probar clicar este botón de mierda para el que me he tirado
          media hora{" "}
          <button
            className="button"
            onClick={() => {
              while (true) {
                window.alert("Pringaoooooooo");
              }
            }}
          >
            TRY ME
          </button>
        </p>
      </main>

      <Footer />
    </div>
  );
}
