import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
      </Head>

      <main>
        <Header title="Welcome to the site!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

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

      </main>

     


      <Footer />
    </div>
  )
}
