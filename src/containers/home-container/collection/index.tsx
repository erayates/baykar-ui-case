import {
  CollectionBottom,
  CollectionMid,
  CollectionTop,
} from "@/components/shapes/collection";
import Icon from "@/components/ui/icon";
import Image from "next/image";
import React from "react";
import WorldMapPart from "./world-map-part";
import MacCard from "@/components/layout/mac-card";

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
        <div className="space-y-8 lg:space-y-20">
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

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3.68fr] gap-8 lg:gap-20 z-20">
            <ul className="space-x-4 md:space-x-0 md:space-y-4 flex flex-1 flex-row lg:flex-col overflow-auto lg:overflow-hidden">
              {collectionList.map((item: ICollectionItem, _idx: number) => (
                <li
                  key={_idx}
                  className="flex flex-shrink-0 items-center space-x-4 p-4 hover:bg-white rounded-lg hover:shadow-lg group"
                >
                  <div className="w-6 h-6 flex items-center">{item.icon}</div>
                  <span className="font-medium text-lg">{item.title}</span>
                  <Icon
                    name="arrowRight"
                    className="hidden group-hover:block"
                  />
                </li>
              ))}
            </ul>

            <div className="relative w-full sm:mr-4 md:mr-0">
              <MacCard
                imageSrc="/assets/images/why-join-us.jpeg"
                imageClasses="h-[160px] md:h-[410px]"
              />

              <MacCard
                imageSrc="/assets/images/product-2.jpeg"
                imageClasses="h-[160px] md:h-[410px]"
                cardClasses="absolute left-[36px] top-[57px] lg:left-[94px] lg:top-[105px]"
              >
                <div className="shadow-macCard absolute top-[64px] md:top-[97px] -right-[25px] md:-right-[91px] bg-white rounded-[10px] z-30">
                  <div className="relative h-[105px] md:h-[286px] w-[94px] md:w-[256px]">
                    <Image
                      src="/assets/images/collection-3.jpeg"
                      alt=""
                      fill
                      className="object-cover p-[6px] rounded-[10px]"
                    />
                  </div>
                </div>
              </MacCard>
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
