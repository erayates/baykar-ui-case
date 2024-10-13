"use client";

import React from "react";
import { _mapMarks } from "@/_mock/map-marks";
import { IMapMark } from "@/types/map-mark";
import { WorldMap } from "@/components/shapes/world-map";
import { cn } from "@/lib/utils";
import Image from "next/image";

const WorldMapPart: React.FC = () => {
  return (
    <div className="bg-amber-900 py-[42px]">
      <div className="max-w-screen-xl md:inner-container mx-auto flex items-center justify-center relative">
        <div className="font-extrabold text-amber-50 absolute z-30 text-center">
          <h2 className="text-2.5xl md:text-5xl leading-[110%]">11,658,467</h2>
          <p className="text-2xl md:text-3xl leading-[110%]">Shoes Collected</p>
        </div>

        <div className="relative left-[350px] sm:left-0">
          <WorldMap opacity={0.5} />

          {_mapMarks.map((mark: IMapMark, idx) => (
            <CircleMark key={idx} {...mark} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CircleMark: React.FC<IMapMark> = ({
  w,
  h,
  top,
  bottom,
  right,
  left,
  tooltip,
}) => {
  const style: React.CSSProperties = {
    width: `${w}px`,
    height: `${h}px`,
    ...(top !== undefined && { top: `${top}px` }),
    ...(bottom !== undefined && { bottom: `${bottom}px` }),
    ...(left !== undefined && { left: `${left}px` }),
    ...(right !== undefined && { right: `${right}px` }),
  };

  const circleMarkClasses = cn(
    "border-lime-400 border-[3px] absolute rounded-full transition-all duration-300 group hover:bg-lime-200"
  );

  return (
    <div className={circleMarkClasses} style={style}>
      <div className="absolute left-1/2 hidden group-hover:block z-50 bg-white rounded-[10px] shadow-lg p-4 w-64 h-[200px] -translate-x-1/2 -translate-y-[calc(100%+55px)] mb-2">
        <Image
          src={tooltip.image}
          alt={tooltip.description}
          fill
          className="object-cover p-2 rounded-[10px]"
        />
      </div>
      <div className="absolute z-30 top-0 left-1/2 -translate-x-1/2 rounded-[5px] shadow-macCard -translate-y-full hidden px-4 pt-4 pb-2 group-hover:block bg-slate-200 w-[240px] after:absolute after:left-1/2 after:shadow-macCard after:bottom-[-8px] after:w-0 after:h-0 after:border-l-[8px] after:border-l-transparent after:border-r-[8px] after:border-r-transparent after:border-t-[8px] after:border-t-slate-200 after:-translate-x-1/2">
        <p className="text-xs text-gray-600 leading-5 text-primary">
          {tooltip.description}
        </p>
      </div>
    </div>
  );
};

export default WorldMapPart;
