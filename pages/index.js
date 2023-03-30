import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript">{window.alert("Pringaoooooooo")}</script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <script type="text/javascript">
          function fun() {alert("Pringaoooooooo")}
        </script>
      </main>

      <Footer />
    </div>
  );
}
