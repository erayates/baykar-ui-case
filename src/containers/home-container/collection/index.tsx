import {
  CollectionBottom,
  CollectionMid,
  CollectionTop,
} from "@/components/shapes/collection";
import Icon from "@/components/ui/icon";
import Image from "next/image";
import React from "react";
import WorldMapPart from "./world-map-part";

interface ICollectionItem {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const collectionList: ICollectionItem[] = [
  { icon: <Icon name="search" />, title: "Bibendum tellus", href: "#" },
  { icon: <Icon name="shieldCheck" />, title: "Cras eget", href: "#" },
  { icon: <Icon name="rocket" />, title: "Dolor pharetra", href: "#" },
  { icon: <Icon name="screen" />, title: "Amet, fringilla", href: "#" },
  { icon: <Icon name="podcast" />, title: "Amet nibh", href: "#" },
  { icon: <Icon name="settingsAlt" />, title: "Sed velit", href: "#" },
];

const Collection: React.FC = () => {
  return (
    <section id="collection" className="relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto inner-container py-20">
        <div className="space-y-8 md:space-y-20">
          <div className="space-y-8 text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Grow Your Collection
            </h2>
            <p className="text-sm md:text-md font-normal leading-[140%]">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_3.68fr] gap-8 lg:gap-20 z-20">
            <ul className="space-x-4 md:space-x-0 md:space-y-4 flex flex-1 flex-row md:flex-col overflow-auto md:overflow-hidden">
              {collectionList.map((item: ICollectionItem, _idx: number) => (
                <li className="flex flex-shrink-0 items-center space-x-4 p-4 hover:bg-white rounded-lg hover:shadow-lg group">
                  <div className="w-6 h-6 flex items-center">{item.icon}</div>
                  <span className="font-medium text-lg">{item.title}</span>
                  <Icon
                    name="arrowRight"
                    className="hidden group-hover:block"
                  />
                </li>
              ))}
            </ul>

            <div className="relative">
              <div className="shadow-macCard rounded-[20px] max-w-[295px] lg:max-w-[759px] relative z-10 bg-white h-full">
                <div className="flex gap-[5px] p-4">
                  <div className="w-2 h-2 rounded-full bg-rose-600"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="relative h-[160px] md:h-[410px]">
                  <Image
                    src="/assets/images/why-join-us.jpeg"
                    alt="Running Everywhere!"
                    className="rounded-b-[20px] pb-[6px] px-[6px] object-cover"
                    fill
                  />
                </div>
              </div>

              <div className="shadow-macCard absolute left-[36px] top-[57px] lg:left-[94px] lg:top-[105px] rounded-[20px] w-full max-w-[295px] lg:max-w-[759px] z-20 bg-white">
                <div className="flex gap-[5px] p-4">
                  <div className="w-2 h-2 rounded-full bg-rose-600"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="relative h-[193px] md:h-[410px]">
                  <Image
                    src="/assets/images/product-2.jpeg"
                    alt="Running Everywhere!"
                    className="rounded-b-[20px] pb-[6px] px-[6px] object-cover"
                    fill
                  />
                </div>
              </div>

              <div className="shadow-macCard absolute top-[121px] lg:top-[202px] right-0 bg-white rounded-[10px] z-30">
                <div className="relative h-[105px] lg:h-[286px] w-[94px] lg:w-[256px]">
                  <Image
                    src="/assets/images/collection-3.jpeg"
                    alt=""
                    fill
                    className="object-cover p-[6px] rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CollectionBackshapes />

      <WorldMapPart />
    </section>
  );
};

const CollectionBackshapes: React.FC = () => {
  return (
    <div className="w-full mt-[96px] md:mt-[172px] relative -z-10 -mb-1">
      <div className="h-[684px] w-[1440px] md:w-full absolute bottom-0">
        <CollectionTop />
      </div>
      <div className="h-[564px] w-[1440px] md:w-full  absolute bottom-0">
        <CollectionMid />
      </div>
      <div className="h-[372px] w-[1440px] md:w-full  absolute bottom-0">
        <CollectionBottom />
      </div>
    </div>
  );
};
export default Collection;
