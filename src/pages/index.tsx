import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Layout>
      <About />
      <section>Projetos</section>
      <section>Skill</section>
      <section>Contato</section>
    </Layout>
  </>
  )
}
