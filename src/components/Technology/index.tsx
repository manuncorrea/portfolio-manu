import Image from "next/image";

interface TechnologyProps{
  name: string;
  icon: string;
};

export default function Technology({ name, icon }: TechnologyProps) {
  return (
    <div className="flex flex-col items-center mb-3">
      <Image src={icon} alt={`${name} Icon`} width={64} height={64} />
      <span>{name}</span>
    </div>
  );
}
