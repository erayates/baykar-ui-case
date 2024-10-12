import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Image from "next/image";
import React from "react";

const WhyJoinUs: React.FC = () => {
  return (
    <section id="why-join-us" className="overflow-hidden">
      <div className="max-w-screen-xl mx-auto inner-container pb-12 md:pb-0">
        <div className="rounded-[30px] bg-white shadow-custom mt-4 mb-14 md:my-40 py-8 px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-extrabold">Why join us</h2>
            <ul>
              <li className="flex items-start md:items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Icon name="check" />
                </div>
                <span className="leading-[140%] md:leading-[180%]">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </span>
              </li>

              <li className="flex items-start md:items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Icon name="check" />
                </div>
                <span className="leading-[140%] md:leading-[180%]">
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </span>
              </li>

              <li className="flex items-start md:items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Icon name="check" />
                </div>

                <span className="leading-[140%] md:leading-[180%]">
                  Ullamcorper ornare in et egestas dolor orci.
                </span>
              </li>
            </ul>
            <Button variant="outlined" color="secondary" size="medium" className="z-20 px-[28px]">
              Sign up now
            </Button>
          </div>

          <div className="mt-8 md:my-10 relative">
            <div className="shadow-macCard rounded-[20px] relative z-20 bg-white h-full">
              <div className="flex gap-[5px] p-4">
                <div className="w-2 h-2 rounded-full bg-rose-600"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="relative h-[193px] md:h-[309px]">
                <Image
                  src="/assets/images/why-join-us.jpeg"
                  alt="Running Everywhere!"
                  className="rounded-b-[20px] pb-[6px] px-[6px] object-cover"
                  fill
                />
              </div>
            </div>
            <WhyJoinUsBackshapes />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyJoinUsBackshapes: React.FC = () => {
  return (
    <React.Fragment>
      <div className="absolute inset-0 z-0 -top-[14px] -left-[72px]">
        <div className="bg-amber-700 w-[55px] h-[55px] md:w-[90px] md:h-[90px] left-12 md:left-14 top-6 rounded-[30px] absolute opacity-75"></div>
        <div className="bg-amber-200 w-[411px] h-[134px] md:w-[666px] md:h-[218px] shadow-macCard -rotate-45 left-0 md:left-4 top-[70px] absolute">
          <div className="bg-sky-700 w-[36px] h-[36px] md:w-[60px] md:h-[60px] rounded-[50px] absolute top-[60px] md:top-[114px] -translate-y-1/2 right-0 translate-x-1/2 opacity-75"></div>
        </div>
        <div className="bg-fuchsia-700 w-[45px] h-[45px] md:w-[74px] md:h-[74px] rounded-[30px] absolute -bottom-5 right-[56px] md:-bottom-11 md:right-16 opacity-75"></div>
        <div className="bg-pink-700 w-[135px] h-[135px] md:w-[218px] md:h-[218px] rounded-[50px] absolute -bottom-[60px] -right-[55px] md:-bottom-[110px] md:-right-[118px] opacity-75"></div>
      </div>
      <div className="bg-green-700 w-[50px] h-[50px] md:w-[85px] md:h-[85px] rounded-[50px] absolute bottom-[-19px] left-[43px] md:bottom-[-37px] md:left-[70px] z-30 opacity-75"></div>
    </React.Fragment>
  );
};
export default WhyJoinUs;
