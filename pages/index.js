import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google V3</title>
        <meta name="description" content='google' />
        <link ref="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}

      {/* {Footer} */}
    </div>
  )
}
