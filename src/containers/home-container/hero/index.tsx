import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="relative inner-container text-center md:text-start max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 place-items-center md:place-items-start lg:grid-cols-[1.5fr_1fr] gap-20 my-12 md:my-20">
          <div className="space-y-8 flex flex-col justify-center md:mt-12">
            <h2 className="text-primary font-extrabold text-3xl md:text-4xl leading-[110%]">
              Collectible Sneakers
            </h2>
            <p className="text-md leading-[160%]">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="flex items-center justify-center px-[7px] md:px-0 md:justify-start">
              <Button
                variant="outlined"
                color="secondary"
                size="medium"
                className="w-full md:w-fit font-medium md:px-[28px]"
              >
                Sign up now
              </Button>
              <Button
                variant="transparent"
                color="secondary"
                size="small"
                className="w-full md:w-fit flex items-center font-medium"
              >
                <Icon name="playCircle" className="inline-block mr-2" />{" "}
                <span>Watch Demo</span>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="bg-gold rounded-[50px] absolute top-0 left-0 w-full h-full scale-x-75 mt-10"></div>
            <Image
              src="/assets/images/hero-shoes.png"
              alt="Nike New Shoes"
              width={480}
              height={380}
              className="relative z-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 py-12 mt-24 md:py-20 md:mt-0">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="relative p-2">
              <Icon name="trophyShape" className="absolute inset-0 left-8" />
              <Icon name="trophy" />
            </div>
            <h3 className="font-medium text-lg">Nibh viverra</h3>
            <p className="text-md leading-[160%]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="relative p-2">
              <Icon name="tunnelShape" className="absolute inset-0 left-6" />
              <Icon name="tunnel" />
            </div>
            <h3 className="font-medium text-lg">Cursus amet</h3>
            <p className="text-md leading-[160%]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="relative p-2">
              <Icon name="tvShape" className="absolute inset-0 left-10" />
              <Icon name="tv" />
            </div>
            <h3 className="font-medium text-lg">Ipsum fermentum</h3>
            <p className="text-md leading-[160%]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-beige absolute inset-0 bottom-0 left-0 w-full h-full -z-20 trapezoid md:rectangle "></div>
    </section>
  );
};

export default Hero;
