interface MacCardProps {
  imageClasses: string;
  imageSrc: string;
  cardClasses?: string;
  children?: React.ReactNode;
}
import { cn } from "@/lib/utils";
import Image from "next/image";

const MacCard: React.FC<MacCardProps> = ({
  imageClasses,
  cardClasses,
  imageSrc,
  children,
}) => {
  return (
    <div
      className={cn(
        "shadow-macCard rounded-[20px] w-[295px] sm:min-w-full lg:max-w-[759px] relative z-10 bg-white h-fit",
        cardClasses
      )}
    >
      <div className="flex gap-[5px] p-4">
        <div className="w-2 h-2 rounded-full bg-rose-600"></div>
        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
      <div className={cn("relative", imageClasses)}>
        <Image
          src={imageSrc}
          alt="Running Everywhere!"
          className="rounded-b-[20px] pb-[6px] px-[6px] object-cover"
          fill
        />
      </div>

      {children && children}
    </div>
  );
};

export default MacCard;
