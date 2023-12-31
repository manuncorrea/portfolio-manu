import React from 'react';
import { GrGithub, GrLinkedin } from 'react-icons/gr';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import { IDComponents } from '@/types/IDComponents';
import Title from '../Title';

export default function Contact({ id }: IDComponents){
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return(
    <>
      <div id={id} className="w-full p-14">
        <div id="contato" className="container mx-auto">
          <Title name="Contatos" />
          <div className="flex justify-center items-center space-x-4">
            <a href="https://github.com/manuncorrea" target="_blank" rel="noreferrer" className="p-2 bg-purple-500 rounded-full hover:bg-secondary transition-colors">
              <GrGithub className="text-primary hover:text-white" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/emanuele-correa-0372b2117/" target="_blank" rel="noreferrer" className="p-2 bg-purple-500 rounded-full hover:bg-secondary transition-colors">
              <GrLinkedin className="text-primary hover:text-white" size={24}  />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5531998724272" target="_blank" rel="noreferrer" className="p-2 bg-purple-500 rounded-full hover:bg-secondary transition-colors">
              <FaWhatsapp className="text-primary hover:text-white" size={24}  />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="h-20 flex justify-center items-center text-white font-light">
          <span className="footer">Copyright © 2023 </span>
          <button onClick={scrollToTop} className="ml-4 p-2 bg-purple-500 rounded-full">
            <FaArrowUp className="text-secondary" />
          </button>
        </div>
      </div>
    </>
  );
}

