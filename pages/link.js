export default function Link() {
  const openTab = () => {
    window.open("https://www.agence-morse.fr/", "_blank");
  };

  return (
    <div className="container">
      <main style={{ width: "100%", padding: 0 }}>
        <button
          className="link"
          style={{ width: "100%", height: "100%", fontSize: "72px" }}
          onClick={openTab}
        >
          Click me
        </button>
      </main>
    </div>
  );
}
