interface ISection {
  color?: string;
  text: string;
  classname?: string;
  children?: React.ReactNode;
}

export const Section = ({ text, color, classname, children }: ISection) => {
  return (
    <div
      className={`border-[#6437FF] w-full m-auto flex flex-col content-center  rounded-[10px] border-2 py-12 ${classname}`}
    >
      <p
        style={{ borderColor: color }}
        className={`border-l-4 pl-3 text-[22px] uppercase font-medium mx-12`}
      >
        {text}
      </p>
      {children}
    </div>
  );
};
