export default function Persistent() {
    const openTab= () => {
      window.open('https://www.persistent.com/insights/what-does-big-tech-moving-into-the-banking-sector-mean-for-traditional-players/','_blank')
    };
  
    return (
      <div className="container">
        <main style={{width: "100%", padding: 0}}>
          <button style={{width: "100%", height: "100%", fontSize: "102px", fontWeight: "900", fontFamily: "Montserrat"}} onClick={openTab}>Explore</button>
        </main>
      </div>
    )
  }