import Image from "next/image";

interface AvatarProps {
  src: string;
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, name }) => {
  return (
    <div className="w-16 h-16 rounded-full relative">
      <Image src={src} alt={name} fill className="object-cover rounded-full" />
    </div>
  );
};

export default Avatar;
