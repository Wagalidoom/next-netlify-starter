export default function Cegid() {
    const openTab= () => {
      window.open('https://www.cegid.com/fr/facturation-electronique/facture-electronique-obligatoire/?_bt=666438205436&_bk=facture%20d%C3%A9mat%C3%A9rialis%C3%A9e&_bm=p&_bn=g&_bg=155089097641','_blank')
    };
  
    return (
      <div className="container">
        <main style={{width: "100%", padding: 0}}>
          <button style={{width: "100%", height: "100%", fontSize: "72px"}} onClick={openTab}>Découvrir le dossier complet</button>
        </main>
      </div>
    )
  }