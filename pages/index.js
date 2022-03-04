import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Heard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Heard" />
        <p className="description">
          Despite the lightning speeds of modern technology, communication between people and our leaders is still often shallow and inefficient.
    We’re creating a tool where citizens and our leaders can learn more about each others’ thoughts and actions, so leaders can understand how to best serve their constituents, and so citizens can regain confidence that our leaders are representing us well.
    <code>pages/index.js</code>
        </p>
            <p className="description">
          More to come soon--sign up for our mailing list at <a href=""></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
