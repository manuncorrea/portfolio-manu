import skillsData from '@/data/skills.json';
import Technology from '../Technology';

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full gap-4 mt-32">
      <div className="grid grid-cols-3 gap-2 border border-gray-200 p-8 rounded">
        <div className="col-span-3 grid grid-cols-3">  
          {skillsData.frontend.map((tech, index) => (
            <Technology key={index} {...tech} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border border-gray-200 p-8 rounded">
        <div className="col-span-3 grid grid-cols-3 ">  
          {skillsData.backend.map((tech, index) => (
            <Technology key={index} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
