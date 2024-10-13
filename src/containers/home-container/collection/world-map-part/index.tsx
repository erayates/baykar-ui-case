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

        <div className="ml-8 md:ml-0 overflow-x-hidden relative">
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
      <div className="relative hidden group-hover:block z-50 bg-white rounded-[10px] shadow-lg p-4 w-64 h-[200px] transform -translate-x-[calc(50%-16px)] -translate-y-[calc(100%+55px)] mb-2">
        <Image
          src={tooltip.image}
          alt={tooltip.description}
          fill
          className="object-cover p-2 rounded-[10px]"
        />
      </div>
      {/* Tooltip Content */}
      <div className="absolute z-30 transform top-0 -translate-x-[calc(50%-16px)] rounded-[5px] shadow-macCard -translate-y-full hidden px-4 pt-4 pb-2 group-hover:block bg-slate-200 w-[240px]">
        <p className="text-xs text-gray-600 leading-5 text-primary">
          {tooltip.description}
        </p>

        {/* Tooltip Arrow */}
        <div
          className={cn(
            "absolute left-1/2 bottom-[-8px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-slate-200",
            ` -translate-x-[calc(50%+5px)] `
          )}
        ></div>
      </div>
    </div>
  );
};

export default WorldMapPart;
