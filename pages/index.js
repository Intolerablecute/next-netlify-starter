import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The test site for me to test things at site</title>
        <h1>The test site for me to test things at site</h1>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the site!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <div>
        <p>
          About Us
        </p>
      </div>


      <div>
        <p>
          Join Us
        </p>
      </div>


      <div>
        <p>
          Our Training
        </p>
      </div>


      <Footer />
    </div>
  )
}
