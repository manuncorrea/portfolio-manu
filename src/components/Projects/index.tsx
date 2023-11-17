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
            <div key={String(project.id)} className="bg-primary rounded-lg transition-transform hover:-translate-y-2 hover:shadow-lg w-full mx-auto mb-8 p-4">
              <h3 className="text-white text-center w-full mb-2">{project.name}</h3>
              <img width={1920} height={970} src={project.photo} alt={project.name} className="w-full"/>
              <section className="mt-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-4 py-2 rounded text-white font-semibold border border-transparent hover:border-white">Repositório</a>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-4 py-2 rounded text-white font-semibold border border-transparent hover:border-white">Visitar</a>
                  </div>
                  <Link href={`/projects/${project.id}`} legacyBehavior>
                    <a className="mt-2 sm:mt-0 bg-transparent px-4 py-2 rounded text-white font-semibold border border-purple-500 hover:bg-purple-600 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">Ver Detalhes</a>
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
