import Image from "next/image";
import logo from "../public/logo.png";
import forward from "../public/forward.svg";
import clock from "../public/clock.svg";
import { Kid, Session, dataAPIResponse } from "@/types/data";
import { useEffect } from "react";

interface IHeader {
  data: dataAPIResponse;
  setSession: Function;
  kid: Kid;
  setKid: Function;
}

export const Header = ({ data, setSession, kid, setKid }: IHeader) => {
  //when kid changes set session to first session
  useEffect(() => {
    setSession(kid.sessions[0]);
  }, [kid]);

  const handleSelectKid = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let kidSelect = data.kids.find((kid: Kid) => kid.id === e.target.value);
    setKid(kidSelect);
  };

  const handleSelectSession = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let sessionSelect = kid.sessions.find(
      (session: Session) => session.id === e.target.value
    );
    setSession(sessionSelect);
  };

  return (
    <div
      className={`h-[134px] pt-6 px-[100px] pb-[60px]  w-screen bg-white flex justify-between `}
    >
      <Image src={logo} width={120} className="h-4 my-auto" alt="logo" />
      <div className="flex items-center gap-3">
        <div className="relative inline-flex gap-4 border border-[#6437FF] rounded-3xl px-3 py-1 cursor-pointer">
          <Image src={clock} alt="chevron-down" className=" h-6 w-6 m-auto" />
          <select
            className="appearance-none w-full py-1 bg-white focus:outline-none  focus:ring-purple-600 focus:border-transparent cursor-pointer"
            name="whatever"
            id="frm-whatever"
            onChange={(e) => handleSelectSession(e)}
          >
            <option disabled value="">
              Select session
            </option>
            {kid?.sessions.map((session: Session, index: number) => {
              return (
                <option key={session.id} value={session.id}>
                  {session.name}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none flex items-center  ">
            <Image
              src={forward}
              alt="chevron-down"
              className=" h-6 w-6 m-auto"
            />
          </div>
        </div>
        <div className="relative inline-flex gap-4 border border-[#6437FF] rounded-3xl px-3 py-1 cursor-pointer">
          <select
            className="appearance-none w-full py-1 bg-white focus:outline-none  focus:ring-purple-600 focus:border-transparent cursor-pointer"
            name="whatever"
            id="frm-whatever"
            onChange={handleSelectKid}
          >
            {data.kids.map((kid: Kid, index: number) => {
              return (
                <option key={kid.id} value={kid.id}>
                  {kid.name}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none flex items-center  ">
            <Image
              src={forward}
              alt="chevron-down"
              className=" h-6 w-6 m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
