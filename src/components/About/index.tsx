import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import ProfolieImage from '../../../public/profolie.png';
import TypingEffect from "../TypingEffect";
import DownloadButton from "../DownloadButton";

export default function About() {
 return (
  <div className="mt-8 mb-6 flex flex-col md:flex-row items-center justify-between w-full">
    <div className="flex flex-row md:flex-col gap-2 items-center text-purple-500 mb-4 md:mb-0 justify-center md:justify-start">
      <Link target="_blank" href="https://github.com/manuncorrea">
        <FiGithub size={20} className="md:text-xl" />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/emanuele-correa/">
        <FiLinkedin size={20} className="md:text-xl" />
      </Link>
    </div> 
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 flex-grow text-center md:text-left">
      <div className="flex flex-col gap-2">
        <span className="text-5xl font-semibold">Emanuele Correa</span>
        <TypingEffect text="Web Developer" />
        <span className="text-lg font-light">Formada em Ciências da Computação</span>
        <DownloadButton filePath="/Currículo-2023.pdf" />
      </div>
      <div className="hidden md:block">
        <Image className="w-62 h-62 rounded-full " src={ProfolieImage} alt={"Emanuele Correa"} />
      </div>
    </div>
  </div>
 )
}
