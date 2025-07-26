import Head from 'next/head'
import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project Home</title>
      </Head>
      <Header />
      <main className="p-8">
        <h2 className="text-3xl font-bold">Welcome to ALX Project 2!</h2>
        <p className="mt-4 text-gray-700">This is your homepage built with Next.js, TypeScript, and Tailwind CSS.</p>
      </main>
    </>
  )
}