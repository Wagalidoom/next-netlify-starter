import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const openTab= () => {
    window.open('https://www.agence-morse.fr/','_blank')
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{width: "100%", padding: 0}}>
        <button style={{width: "100%", height: "100%", fontSize: "72px"}} onClick={openTab}>Click me</button>
      </main>
    </div>
  )
}
