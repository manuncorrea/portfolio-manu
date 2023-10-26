import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import About from '@/components/About'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Layout>
      <About />
      <section>Projetos</section>
      <Skills />
      <section>Contato</section>
    </Layout>
  </>
  )
}
