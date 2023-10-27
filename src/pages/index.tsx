import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Layout>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  </>
  )
}
