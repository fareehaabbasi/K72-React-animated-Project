import React from "react";

const FullScreenNav = () => {
  return (
    <div id="fullScreenDiv" className="text-white h-screen py-40 w-full absolute bg-amber-900">
      <div id="all=links">
        <div id="links" className="border-y-1 border-white">
          <h1 className="font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Work</h1>
          <div className="absolute flex">
            <div className="flex overflow-auto items-center">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">See Everything</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/1st-line.jpg" alt="img" />
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">See Everything</h2>
              <img className="w-96 h-[75px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/1st-line-2.png" alt="" />
            </div>
          </div>
        </div>
        <div id="links" className="border-t-1 border-white">
          <h1 className="font-[font300] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Agency</h1>
          {/* <div>
            <div>
              <h2>See Everything</h2>
              <img src="/src/assets/images/NavbarScreen/1st-line.jpg" alt="img" />
              <h2>See Everything</h2>
              <img src="/src/assets/images/NavbarScreen/1st-line-2.png" alt="" />
            </div>
            <div>
              <h2>See Everything</h2>
              <img src="/src/assets/images/NavbarScreen/1st-line.jpg" alt="" />
              <h2>See Everything</h2>
              <img src="/src/assets/images/NavbarScreen/1st-line-2.png" alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
