import { Poppins } from "next/font/google";
import skills from "../public/skills-icon.png";
import loading from "../public/loading-small.png";
import Image from "next/image";
import { Session } from "@/types/data";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ScriptableContext,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

interface IRadar {
  session: Session;
}
const RadarSkills = ({ session }: IRadar) => {
  const arrayOfDataSkills = [
    session.skills.leadership.score,
    session.skills.communication.score,
    session.skills.teamwork.score,
    session.skills.self_awareness.score,
    session.skills.collaboration.score,
    session.skills.resilience.score,
  ];

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false, // Hides the labels in the middel (numbers)
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };
  const data = {
    labels: [
      "Leadership",
      "Communication",
      "Team-work",
      "Self-awareness",
      "Collaboration",
      "Resilience",
    ],
    datasets: [
      {
        data: arrayOfDataSkills,
        backgroundColor: (context: ScriptableContext<"radar">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(95,46,234,0.8)");
          gradient.addColorStop(0.3, "rgba(255,155,255,0.8)");
          gradient.addColorStop(0.7, "rgba(100,215,255,1)");
          gradient.addColorStop(1, "rgba(95,46,234,1)");
          return gradient;
        },
        pointRadius: 0,
      },
    ],
  };

  return (
    <>
      <div className="h-[492px] flex flex-col bg-white m-10 rounded-3xl">
        <div className="inline-flex justify-center lg:gap-40 gap-8 content-between pt-8">
          <div className="inline-flex gap-1.5">
            <Image src={skills} alt="skills" className="m-auto" />
            <p className=" text-lg font-medium m-auto">Skills overview </p>
          </div>

          <div className="inline-flex gap-2 border border-[#6437FF] pt-1 pb-0.5  px-3 rounded-full">
            <p className={`  ${poppins.className}`}>
              talk time{" "}
              <span className=" text-[#6437FF]">
                {`${session.duration} minutes`}
              </span>
            </p>{" "}
            <Image src={loading} alt="skills" className="m-auto animate-spin" />
          </div>
        </div>
        <div className="w-[400px] h-[400px] m-auto ">
          <Radar data={data} options={options} />
        </div>
      </div>
    </>
  );
};
export default RadarSkills;
