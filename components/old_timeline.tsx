// useEffect(() => {
//   setSelectThumbnail(Math.floor(+values / (100 / 6)));
// }, [values]);

// <div className="pt-12 col-start-1 col-end-1 row-start-1 row-end-1">
//   <div className="grid grid-cols-1 grid-rows-1">
//     <div className="col-start-1 col-end-1 row-start-1 row-end-1 relative">
//       <Range
//         step={4}
//         min={0}
//         max={100}
//         values={values}
//         onChange={(values) => setValues(values)}
//         renderTrack={({ props, children }) => (
//           <div className="bg-transparent h-[362px] " {...props}>
//             {children}
//           </div>
//         )}
//         renderThumb={({ props }) => (
//           <div {...props} className="focus-visible:outline-none relative">
//             <Image src={union} alt="" className=" relative -top-2" />
//             <div className="w-1 h-[354px] bg-black relative -top-2 m-auto" />
//           </div>
//         )}
//       />
//     </div>
//     <div className="border-dashed border-t-2 border-b-2 border-black">
//       <div className="h-64 bg-red-200 my-7 flex flex-row w-full overflow-x-scroll scroll-smooth snap-x">
//         <div className="border-green-600 border-2 h-full  w-64 snap-center">
//           1
//         </div>
//         <div className="border-green-600 border-2 h-full flex-1 w-64  snap-center">
//           2
//         </div>
//         <div className="border-green-600 border-2 h-full flex-1 w-64  snap-center">
//           3
//         </div>
//         <div className="border-green-600 border-2 h-full flex-1 w-64  snap-center">
//           4
//         </div>
//         <div className="border-green-600 border-2 h-full flex-1 w-64  snap-center">
//           5
//         </div>
//         <div className="border-green-600 border-2 h-full flex-1 w-64  snap-center">
//           6
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
