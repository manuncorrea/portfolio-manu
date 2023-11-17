import { motion } from 'framer-motion';
import { repositoryGithub } from '@/data/repository';
import { IProject } from '@/types/IProjects';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Head from 'next/head';

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    if (typeof id === 'string') {
      const projectData = repositoryGithub.find((p) => p.id === id);
      setProject(projectData || null);
    }
  }, [id]);

  if (project === null) {
    return <p>Carregando...</p>;
  }

  if (!project) {
    return <p>Projeto não encontrado.</p>;
  }

  const imageAnimation = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  };

  const contentAnimation = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  const goToHome = () => {
    router.push("/");
  }

  return (
    <>
       <Head>
        <title>{project ? `Projeto - ${project.name}` : 'Carregando...'}</title>
      </Head>
      <div className="container mx-auto p-8">
      <button
        onClick={() => router.push('/')}
        className="mb-4 p-2 border border-purple-500 rounded-full text-white bg-purple-500 hover:bg-purple-600 transition duration-300 ease-in-out cursor-pointer"
        aria-label="Voltar"
        title="Voltar"
      >
        <FaArrowLeft className="h-5 w-5" />
      </button>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        <motion.a
          href={project.url} 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/2 cursor-pointer"
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
        >
          <img src={project.photo} alt={project.name} className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" />
        </motion.a>
        <motion.div
          className="w-full md:w-1/2"
          variants={contentAnimation}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
          <p className="mb-4">{project.description}</p>
          <a href={project.repository} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-700 transition duration-300 ease-in-out">Ver Código no GitHub</a>
          <div className="space-y-2 mt-4">
            <h2 className="text-xl font-semibold">Skills:</h2>
            {project.skills.map((skill, index) => (
              <span key={index} className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
  </div>
    </>
);
}