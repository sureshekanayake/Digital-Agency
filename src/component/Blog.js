import React from "react";

import Image1 from "../assets/images/blog/1.jpg";
import Image2 from "../assets/images/blog/2.jpg";
import Image3 from "../assets/images/blog/3.jpg";

import { Link as Link2 } from 'react-router-dom';

export default function Blog() {
  const blog = [
    {
      id: "1",
      title: "Creativity is nothing but a mind set free",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Image1,
    },
    {
      id: "2",
      title: "Quality Resourcing",
      description:
        "When an unknown printer took a galley of type and scrambled it.",
      image: Image2,
    },
    {
      id: "3",
      title: "Business Services",
      description:
        "It has survived not only five centuries but leap in typesetting.",
      image: Image3,
    },
  ];

  return (
    <>
      <section className="relative md:py-24 py-16" id="blog">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Blogs</h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Latest News</h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
            {blog.map((item, key) => (
              <div key={key} className="blog relative rounded-md shadow shadow-slate-200 dark:shadow-slate-800 overflow-hidden">
                <img src={item.image} alt="" />
                <div className="content p-6">
                  <Link2 to="#" className="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">Building Your Corporate Identity from Upwind</Link2>
                  <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                  <div className="mt-5">
                    <Link2 to="#" className="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">Read More <i className="uil uil-arrow-right"></i></Link2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

}

