export default function Morse() {
    const openTab= () => {
      window.open('https://www.agence-morse.fr/contacter-lagence-morse/','_blank')
    };
  
    return (
      <div className="container">
        <main style={{width: "100%", padding: 0}}>
          <button style={{width: "100%", height: "100%", fontSize: "102px", fontWeight: "900", fontFamily: "Montserrat"}} onClick={openTab}>Par ici !</button>
        </main>
      </div>
    )
  }