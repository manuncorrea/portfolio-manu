import { IDComponents } from '@/types/IDComponents';
import Link from 'next/link';
import Title from '../Title';
import { repositoryGithub } from '../../data/repository';

export default function Projects({ id }: IDComponents) {
  return (
    <section id={id} className="w-full bg-secondary mt-32">
      <Title name="Meus Projetos" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
        {repositoryGithub.map((project) => {
          return (
            <div key={String(project.id)} className="bg-primary rounded-lg cursor-pointer transition-transform hover:-translate-y-2 hover:shadow-lg w-450 mx-auto mb-8 p-4">
              <h3 className="text-white text-center w-full mb-2">{project.name}</h3>
              <img width={1920} height={970} src={project.photo} alt={project.name} className="w-full"/>
              <section className="mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-4 py-2 mr-2 rounded text-white font-semibold border border-transparent hover:border-white">Repositório</a>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-4 py-2 rounded text-white font-semibold border border-transparent hover:border-white">Visitar</a>
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <span className="bg-transparent px-4 py-2 rounded text-white font-semibold border border-purple-500 hover:bg-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">Ver Detalhes</span>
                  </Link>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </section>
  );
}
