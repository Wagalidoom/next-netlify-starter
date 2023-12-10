export default function Msgplaut() {
    const openTab= () => {
      window.open('https://www.msg-plaut.com/future-mobility/banking-industry','_blank')
    };
  
    return (
      <div className="container">
        <main style={{width: "100%", padding: 0}}>
          <button style={{width: "100%", height: "100%", fontSize: "102px", fontWeight: "900", fontFamily: "Montserrat"}} onClick={openTab}>Read the report</button>
        </main>
      </div>
    )
  }