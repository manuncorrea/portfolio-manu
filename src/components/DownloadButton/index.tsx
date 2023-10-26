import { FiDownload } from 'react-icons/fi';

interface DownloadButtonProps {
  filePath: string;
}

export default function DownloadButton({ filePath }: DownloadButtonProps) {
  return (
    <a
      href={filePath}
      download
      className="
        inline-flex 
        items-center
        justify-center 
        px-6 
        py-2 
        border 
        border-transparent 
        text-base 
        font-medium 
        rounded-full 
        shadow-sm
      text-white 
        bg-purple-500 
        hover:bg-purple-700 
        focus:outline-none 
        focus:ring-2 
        focus:ring-purple-500
        mt-6
      "
    >
      Baixar Currículo
      <FiDownload className="ml-2" />
    </a>
  
  );
};


