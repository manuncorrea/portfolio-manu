import { IDComponents } from '@/types/IDComponents'
import repository from '../../data/repository.json'
import Title from '../Title'
import Image from 'next/image'

export default function Projects({ id }: IDComponents) {
  return(
    <section id={id} className="w-full bg-secondary mt-32">
      <Title name="Meus Projetos" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
        {repository.map((e, index) => {
          return (
            <div key={index} className="bg-primary rounded-lg cursor-pointer transition-transform hover:-translate-y-2 hover:shadow-lg w-450 mx-auto mb-8 p-4">
              <h3 className="text-white text-center w-full mb-2">{e.name}</h3>
              <img width={1920} height={970} src={e.photo} alt={e.name} className="w-full"/>
              <section className="mt-4">
                <div className="flex justify-between px-8">
                  <a href={e.repository} target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-4 py-2 rounded text-white font-semibold border border-transparent hover:border-white">Repositorio</a>
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-4 py-2 rounded text-white font-semibold border border-transparent hover:border-white">Visitar</a>
                </div>
              </section>
            </div>
          )
        })}
      </div>
    </section>
  )
}
