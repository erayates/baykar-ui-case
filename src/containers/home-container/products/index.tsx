import Button from "@/components/ui/button";
import ProductCard from "./product-card";

const Products: React.FC = () => {
  return (
    <section id="products" className="bg-primary relative">
      <div className="inner-container relative my-12 md:my-20 space-y-8 md:space-y-20 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center space-y-8 md:space-y-0 md:justify-between md:flex-row">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-[110%] text-white">
            The best of the best
          </h2>
          <Button color="white" variant="outlined" size="large">
            Sign up now
          </Button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 z-20">
            {Array.from({ length: 3 }).map((_item, _idx) => (
              <ProductCard
                key={_idx}
                title="Title"
                description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                imageUrl={`/assets/images/product-${_idx + 1}.jpeg`}
              />
            ))}
          </div>

          <ProductsBackshapes />
        </div>
      </div>
    </section>
  );
};

const ProductsBackshapes: React.FC = () => {
  return (
    <div className="absolute inset-0 left-0 z-0">
      <div className="hidden md:block h-[271px] w-[271px] rounded-[50px] border-none bg-pink-700 -left-8 bottom-8 opacity-75 absolute"></div>
      <div className="block md:hidden h-[202px] w-[202px] rounded-[50px] border-none bg-pink-700 left-6 top-[312px] opacity-75 absolute"></div>
      <div className="hidden md:block h-[161px] w-[161px] rounded-[50px] border-none bg-sky-700 -top-8 left-[422px] opacity-75 absolute"></div>
      <div className="block md:hidden h-[120px] w-[120px] rounded-[50px] border-none bg-sky-700 top-[654px] -right-4  opacity-75 absolute"></div>
      <div className="hidden lg:block h-[130px] w-[130px] rounded-[30px] border-none bg-amber-700 bottom-12 left-[721px] opacity-75 absolute"></div>
      <div className="hidden lg:block h-[202px] w-[202px] rounded-[30px] border-none bg-fuchsia-700 -bottom-6 right-[100px] opacity-75 absolute"></div>
      <div className="hidden md:block h-[232px] w-[232px] rounded-[50px] border-none bg-green-700 top-8 -right-12 opacity-75 absolute"></div>
      <div className="block md:hidden h-[151px] w-[151px] rounded-[30px] border-none bg-fuchsia-700 -left-4 bottom-[280px] opacity-75 absolute"></div>
    </div>
  );
};

export default Products;
