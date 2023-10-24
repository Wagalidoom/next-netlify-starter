export default function Generix() {
    const openTab= () => {
      window.open('https://www.generixgroup.com/sites/default/files/2023-09/Barometre_2023_Generix_Markess.pdf','_blank')
    };
  
    return (
      <div className="container">
        <main style={{width: "100%", padding: 0}}>
          <button style={{width: "100%", height: "100%", fontSize: "92px"}} onClick={openTab}>Accéder à l'étude</button>
        </main>
      </div>
    )
  }