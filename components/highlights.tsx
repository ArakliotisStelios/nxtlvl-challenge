import Image from "next/image";
import { useRef } from "react";
import growUp from "../public/grow-up.png";
import stars from "../public/stars.png";
import { Sentence, Session } from "@/types/data";
import { Timeline } from "./timeline";

interface IChip {
  enabled: boolean;
  children: React.ReactNode;
}

const Chip = ({ enabled, children }: IChip) => {
  return enabled ? (
    <div className="px-[10px] pt-2 bg-[#6437ff33] rounded-3xl w-fit h-11 mr-4 mb-6">
      <p className=" text-[#6437FF] text-lg text-center">{children}</p>
    </div>
  ) : (
    <div className="px-[10px] pt-2 bg-white rounded-3xl w-fit h-11 mr-4 mb-6">
      <p className="text-[#7D7D7D] text-lg text-center">{children}</p>
    </div>
  );
};

interface ISentences {
  sentences: Array<Sentence>;
}

const Sentences = ({ sentences }: ISentences) => {
  return (
    <div className=" lg:w-[340px] bg-white p-5 rounded-2xl mt-4 w-full ">
      <p className="text-black uppercase text-lg "> most used sentences</p>
      <ol className="list-disc pt-5">
        {sentences.map((sentence: Sentence) => {
          return (
            <li key={sentence.id} className="text-[#6437FF] text-2xl ml-5 pb-2">
              <div className="text-[#7D7D7D] text-lg">{sentence.text}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

interface IHighlights {
  color: string;
  classname?: string;
  session: Session;
}

export const Highlights = ({ color, session }: IHighlights) => {
  const timelineRef = useRef<HTMLVideoElement>(null);
  const strength = Object.values(session.skills).filter(
    (x) => x.status === 1
  )[0];
  const grow = Object.values(session.skills).filter((x) => x.status === 2)[0];

  return (
    <>
      <p
        style={{ borderColor: color }}
        className={`border-l-4 pl-3 text-[22px] uppercase font-medium mx-12`}
      >
        {"last session highlights"}
      </p>

      <p className={`text-[22px] mt-[72px] text-black  font-medium mx-12`}>
        {"AI Filters"}
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1 border-dashed mx-12 pt-11 ">
        <div className=" flex flex-row flex-wrap lg:max-w-[360px] max-w-full">
          <Chip enabled={session.skills.leadership.status !== 0}>
            Leadership
          </Chip>
          <Chip enabled={session.skills.resilience.status !== 0}>
            Resilience
          </Chip>
          <Chip enabled={session.skills.teamwork.status !== 0}>Team-work</Chip>
          <Chip enabled={session.skills.self_awareness.status !== 0}>
            Self-awareness
          </Chip>
          <Chip enabled={session.skills.collaboration.status !== 0}>
            Collaboration
          </Chip>
          <Chip enabled={session.skills.communication.status !== 0}>
            Communication
          </Chip>
          <Sentences sentences={session.most_used} />
        </div>
        <div className="lg:mr-8 mr-0 rounded-3x lg:pt-0 pt-10 ">
          <div className="relative w-full h-full flex flex-col justify-start">
            {session.video && (
              <div className="relative max-w-3xl">
                <video
                  className="rounded-3xl cursor-pointer"
                  controls
                  ref={timelineRef}
                >
                  <source src={session.video.url} type="video/mp4" />
                </video>
                <div className=" absolute  bottom-16 w-full flex justify-center gap-2">
                  <div className=" rounded-lg bg-white h-8 py-1 px-3 inline-flex justify-center gap-2">
                    <p className={`text-[#7D7D7D] text-sm`}>{strength.text}</p>
                    <Image
                      className="w-4 h-4 relative top-0.5 "
                      src={stars}
                      alt="stars"
                    />
                    <p className={`text-[#7D7D7D] text-sm`}>
                      {strength.comment}
                    </p>
                  </div>
                  <div className=" rounded-lg bg-white h-8 py-1 px-3 inline-flex justify-center gap-2">
                    <p className={`text-[#7D7D7D] text-sm`}>{grow.text}</p>
                    <Image
                      className="w-4 h-4 relative top-0.5 "
                      src={growUp}
                      alt="stars"
                    />
                    <p className={`text-[#7D7D7D] text-sm`}>{grow.comment}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {session.video && (
        <Timeline
          timelineRef={timelineRef}
          highlights={session.video.highlights}
        />
      )}
    </>
  );
};
