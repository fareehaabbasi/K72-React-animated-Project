import React from "react";
import { FaHeart } from "react-icons/fa6";

const FullScreenNav = () => {
  return (
    <div id="fullScreenDiv" className="text-white h-screen w-full absolute bg-black">
      <div className="flex w-full justify-between items-start">
        <div className="p-2">
        <div className="w-30">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="44"
            viewBox="0 0 103 44"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="h-20 w-20 bg-red-700">
        <div></div>
        <div></div>
      </div>
      </div>
      <div id="all=links" className="py-8">
        <div className="cursor-pointer link relative border-y-1 border-white/30">
          <h1 className="font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Work</h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center border-r-2 border-[#D3FD50]">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">See Everything&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/1st-line.jpg" alt="img" />
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">See Everything&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/1st-line-2.png" alt="" />
            </div>
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">See Everything&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/1st-line.jpg" alt="img" />
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">See Everything&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/1st-line-2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="cursor-pointer link relative border-y-1 border-white/30">
          <h1 className="font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Agency</h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center border-r-2 border-[#D3FD50]">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Know Us&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/2nd-line-3.jpg" alt="img" />
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Know us&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/2nd-line-2.jpg" alt="" />
            </div>
            <div className="moveX flex items-center border-r-2 border-[#D3FD50]">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Know Us&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/2nd-line-3.jpg" alt="img" />
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Know us&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/2nd-line-2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="cursor-pointer link relative border-y-1 border-white/30">
          <h1 className="font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Contact</h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center border-r-2 border-[#D3FD50]">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Send us a Fax</h2>
              <span><FaHeart  className="w-32 h-16"/></span>
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Send us a Fax</h2>
              <span><FaHeart  className="w-32 h-16"/></span>
            </div>
            <div className="moveX flex items-center border-r-2 border-[#D3FD50]">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Send us a Fax</h2>
              <span><FaHeart  className="w-32 h-16"/></span>
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Send us a Fax</h2>
              <span><FaHeart  className="w-32 h-16"/></span>
            </div>
          </div>
        </div>
        <div className="cursor-pointer link relative border-y-1 border-white/30">
          <h1 className="font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Work</h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center border-r-2 border-[#D3FD50]">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Blog&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/4th-line.jpg" alt="img" />
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Blog&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/4th-line-vid..png" alt="" />
            </div>
            <div className="moveX flex items-center border-r-2 border-[#D3FD50]">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Blog&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/4th-line.jpg" alt="img" />
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Blog&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/4th-line-vid..png" alt="" />
            </div>
            <div className="moveX flex items-center border-r-2 border-[#D3FD50]">
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Blog&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/4th-line.jpg" alt="img" />
              <h2 className="whitespace-nowrap font-[font500] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Blog&nbsp;</h2>
              <img className="w-56 shrink-0 h-[70px] object-cover rounded-full" src="/src/assets/images/NavbarScreen/4th-line-vid..png" alt="" />
            </div>
          </div>
        </div>
        {/* <div id="links" className="border-t-1 border-white">
          <h1 className="font-[font300] leading-[0.8] pt-3 text-center text-[8.7vw] uppercase">Agency</h1>
          <div>
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
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FullScreenNav;
