import { RefObject, useState } from "react";
import Image from "next/image";
import union from "../public/Union.png";
import { Highlight } from "@/types/data";

interface ExampleProps {
  timelineRef: RefObject<HTMLVideoElement>;
  highlights: Array<Highlight>;
}

export const Timeline = ({ timelineRef, highlights }: ExampleProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    thumbnail: Highlight
  ) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
    if (timelineRef !== null && timelineRef.current !== null) {
      timelineRef.current.currentTime = thumbnail.timestamp;
      timelineRef.current.play();
    }
  };

  const handleScroll = () => {
    setCursorPosition({ x: 0, y: 0 });
  };

  return (
    <div className="border-dashed border-t-2 border-b-2 border-black mt-14">
      {cursorPosition.x > 0 && (
        <div
          style={{ left: `${cursorPosition.x}px ` }}
          className="absolute -translate-y-16 "
        >
          <Image src={union} alt="" className="-top-2" />
          <div className={`w-1 h-[354px] relative bg-black m-auto `} />
        </div>
      )}
      <div
        className="flex overflow-x-scroll hide-scroll-bar cursor-pointer my-7  bg-[#6437FFF5] "
        onScroll={handleScroll}
      >
        <div className="flex flex-nowrap gap-3 h-64 ">
          {highlights.map((item) => {
            return (
              <div key={item.id} className=" h-full w-64 snap-center">
                <Image
                  src={item.url}
                  width={240}
                  height={240}
                  className="w-full h-full aspect-square"
                  alt="thumbnail"
                  onClick={(e) => handleClick(e, item)}
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
