import { Space_Grotesk } from "next/font/google";
import { Header } from "@/components/header";
import { Section } from "@/components/section";
import { Highlights } from "@/components/highlights";
import { getLocalData } from "../lib/localdata";
import { Kid, Session, dataAPIResponse } from "@/types/data";
import { useState } from "react";
import RadarSkills from "@/components/radar";

interface IPosts {
  data: dataAPIResponse;
}

const grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home({ data }: IPosts) {
  const [session, setSession] = useState<Session>(data.kids[0].sessions[0]);
  const [kid, setKid] = useState<Kid>(data.kids[0]);

  return (
    <>
      <Header
        data={data}
        setSession={setSession}
        kid={kid}
        setKid={setKid}
      ></Header>
      <div
        className={`w-screen px-[100px] h-full bg-[#FBFBFB] ${grotesk.className}`}
      >
        <h1
          className={`text-[#1A1B31] font-normal leading-8 text-[42px] pt-24 `}
        >
          {`Hello ${data.user.name},`}
        </h1>
        <p className={`text-[#1A1B31] font-normal leading-8 text-base pt-4 `}>
          {`  Follow ${kid.name}’s progress and be part of his journey`}
        </p>

        <Section
          text="nxtlvl ai"
          color="#6437FF"
          classname="bg-[#6437ff] bg-opacity-[0.02] mt-8"
        >
          {session && (
            <>
              <RadarSkills session={session} />
              <Highlights session={session} color="#6437FF" />
            </>
          )}
        </Section>
        <Section
          text="facilitator feedback"
          color="#64D7FF"
          classname=" mt-[42px]"
        />
        <Section text="self evaluation" color="#FF9B00" classname="mt-8" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await getLocalData();

  return {
    props: {
      data,
    },
  };
}
