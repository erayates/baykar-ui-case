import Image from "next/image";
import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className="shadow-cardBottom border border-primary rounded-[10px] bg-primary">
      <div className="h-[220px] rounded-t-[10px] relative">
        <Image
          src={imageUrl}
          fill
          alt={title + "Thumbnail"}
          className="rounded-t-[10px] object-cover"
        />
      </div>
      <div className="text-white p-8 space-y-8 rounded-b-[10px]">
        <div className="space-y-4">
          <h3 className="text-sxl font-bold">{title}</h3>
          <p className="text-md leading-[160%]">{description}</p>
        </div>
        <Button
          variant="outlined"
          color="white"
          className="w-full flex items-center justify-center"
          size="small"
        >
          <Icon name="shoppingCart" className="inline-block mr-4" />
          <span className="text-lg font-normal">Buy Now</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
