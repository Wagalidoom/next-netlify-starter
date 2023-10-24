export default function Docuware() {
    const openTab= () => {
      window.open('https://start.docuware.com/fr/passer-a-la-facture-electronique-guide-complet#section5','_blank')
    };
  
    return (
      <div className="container">
        <main style={{width: "100%", padding: 0}}>
          <button style={{width: "100%", height: "100%", fontSize: "92px"}} onClick={openTab}>Accéder à l'ebook</button>
        </main>
      </div>
    )
  }