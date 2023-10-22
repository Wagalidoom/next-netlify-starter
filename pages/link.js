export default function Link() {
  const openTab = () => {
    window.open("https://www.agence-morse.fr/", "_blank");
  };

  return (
    <div className="container">
      <main style={{ width: "100%", padding: 0 }}>
        <button
          style={{
            width: "100%",
            height: "100%",
            fontSize: "72px",
            backgroundColor: "#1899D6",
            border: "solid transparent",
            borderRadius: "16px",
            borderWidth: "0 0 4px",
          }}
          onClick={openTab}
        >
          Click me
        </button>
      </main>
    </div>
  );
}
