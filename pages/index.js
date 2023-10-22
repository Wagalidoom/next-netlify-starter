import Head from "next/head";

export default function Home() {
  const openTab = () => {
    window.open("https://www.agence-morse.fr/", "_blank");
  };

  return (
    <div className="container">
      <Head>
        <title>Morse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: "100%", padding: 0 }}>
        <iframe
          width="100%"
          height="100%"
          src="https://oncyber.io/spaces/vR8qMW42qsj0VtQCqe4r?coords=-12.13x2.82x-17.51x-3.04"
        ></iframe>
      </main>
    </div>
  );
}
