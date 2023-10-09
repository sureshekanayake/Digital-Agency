import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";

import AboutImage from "../assets/images/about.jpg";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

export default function About() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <img src={AboutImage} className="rounded-lg shadow-lg relative" alt="" />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  
                </div>
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Who We Are ?</h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Our Company Story</h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">We began our journey with a simple yet powerful vision: To redefine digital success for businesses of all sizes. Today, we stand as a beacon of innovation and expertise in the digital landscape.</p>

                <div className="relative mt-10">
                  <a href="#portfolio" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">View Portfolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="yba7hPeTSjk"
        onClose={() => setOpen(false)}
      />
    </>
  );

}

