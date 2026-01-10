import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agency = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArr = [
    "/src/assets/images/agency-img/first-sec-img.jpg",
    "/src/assets/images/agency-img/first-sec-img2.jpg",
    "/src/assets/images/agency-img/first-sec-img3.jpg",
    "/src/assets/images/agency-img/first-sec-img4.jpg",
    "/src/assets/images/agency-img/first-sec-img5.jpg",
    "/src/assets/images/agency-img/first-sec-img6.jpg",
    "/src/assets/images/agency-img/first-sec-img7.jpg",
    "/src/assets/images/agency-img/first-sec-img8.jpg",
  ]
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 36%",
        end: "top -100%",
        scrub: true,
        pin: true,
        onUpdate: function(elem){
          let imageIndex;
          if (elem.progress<1) {
            imageIndex = Math.floor(elem.progress * (imageArr.length - 1))
          }else {
            imageIndex = imageArr.length-1
          }
          imageRef.current.src = imageArr[imageIndex]
        }
      }
    })
  })
  return (
    <div>
      <div className="section-1">
      <div ref={imageDivRef} className="h-[19vw] overflow-hidden rounded-3xl w-[14vw]  absolute top-32 left-[30vw]">
        <img ref={imageRef}
          className="w-full h-full object-cover"
          src="/src/assets/images/agency-img/first-sec-img.jpg"
          alt="first-img"
        />
      </div>
      <div className="relative">
        <div className="mt-[55vh] font-[font500]">
          <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
            SEVEN7Y <br />
            TWO
          </h1>
        </div>
        <div className="flex flex-col md:items-end items-center justify-center font-[font300] md:text-6xl text-3xl md:mr-9 max-w-2xl mx-auto p-4 ">
          <p className="text-end">We’re inquisitive</p>
          <p className="leading-[4.7vw] md:w-[60vw]">
            and open-minded, and we make sure creativity crowds out ego from
            every corner. A brand is a living thing, with values, a personality
            and a story. If we ignore that, we can achieve short-term success,
            but not influence that goes the distance. We bring that perspective
            to every brand story we help tell.
          </p>
        </div>
      </div>
    </div>
    <div className="section-2 h-screen">
      
    </div>
    </div>
  );
};

export default Agency;