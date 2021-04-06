import Head from 'next/head'
import ThemeChanger from '../components/ThemeChanger'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          dark mode toggle example
        </h1>

        <ThemeChanger/>
        <div>

        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>thien</p>
      </footer>
    </div>
  )
}
