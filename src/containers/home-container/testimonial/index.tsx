"use client";
import Carousel from "@/components/layout/carousel";

const Testimonial: React.FC = () => {
  //   // Optional: Auto-slide functionality
  //   useEffect(() => {
  //     const interval = setInterval(nextSlide, 5000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <section id="testimonial">
      <div className="max-w-screen-xl space-y-4 md:space-y-10 mb-12 md:my-20 mx-auto relative">
        <div className="flex justify-center md:justify-between md:items-center inner-container">
          <h2 className="text-2xl leading-9 md:text-3xl font-extrabold">
            Because they love us
          </h2>
        </div>

        <div className="relative md:mx-10">
          <div className="bg-highlight h-[287px] md:h-[421px] absolute top-0 left-0 w-full"></div>
        </div>

        <Carousel />
      </div>
    </section>
  );
};

export default Testimonial;
