export default function Sas() {
    const openTab= () => {
      window.open('https://www.sas.com/en_us/news/press-releases/2022/october/banking-in-2035-study-three-futures.html','_blank')
    };
  
    return (
      <div className="container">
        <main style={{width: "100%", padding: 0}}>
          <button style={{width: "100%", height: "100%", fontSize: "102px", fontWeight: "900", fontFamily: "Montserrat"}} onClick={openTab}>Discover the study</button>
        </main>
      </div>
    )
  }