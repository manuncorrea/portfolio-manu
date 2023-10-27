interface TitleProps {
  name: string;
}

export default function Title({ name }: TitleProps) {
 return(
  <div className="text-center text-white title mb-4 mt-4">
    <span className="text-lg font-light">{name}</span>
    <span className="block border-t-2 to-purple-500 border-accent w-16 mx-auto mb-2"></span>
  </div>
 )
}