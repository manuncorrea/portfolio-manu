import skillsData from '@/data/skills.json';
import Technology from '../Technology';
import { IDComponents } from '@/types/IDComponents';
import Title from '../Title';

export default function Skills({ id }: IDComponents) {
  return (
   <>
    <Title name="Skills" />
    <div id={id} className="grid grid-cols-1 md:grid-cols-2 h-full w-full gap-4 ">
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
   </>
  );
}
