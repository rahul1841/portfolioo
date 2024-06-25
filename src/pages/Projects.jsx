import React from "react";
import { TbSourceCode } from "react-icons/tb";
import { BsGlobe2 } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
        "My portfolio",
      source: "https://github.com/rahul1841/portfolioo",
      demo: "https://portfolioo-nu-three.vercel.app/",
    }, 
    {
      title: "EduGlow",
      description:
        "EduGlow is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
      source: "https://github.com/rahul1841/EduGlow",
      demo: "https://edu-glow.vercel.app/",
    },
    {
      title: "WebMine",
      description:
        "A Platform to scrape and analyze customer review on products." ,
      source: "https://github.com/rahul1841/WebMine",
      demo: "https://web-mine.vercel.app/",
    },
    {
      title: "AviScan",
      description:
        "A Hackathon project for categorizing faults in Aeroplanes.",
      source: "https://github.com/rahul1841/AviaScan/tree/master/AviaScan-main",
      demo: "",
    },
    {
      title: "Expense Tracker",
      description:
        "A Expense Tracker application using Context Api.",
      source: "https://github.com/rahul1841/Expense-Tracker",
      demo: "",
    },
  ];
  return (
    <>
      <div className="text-5xl font-bold mb-10">Projects</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((data,index) => (
          <div key={index} className="border p-5 rounded-xl border-greylight-200 bg-greylight-300 flex flex-col justify-between">
            <div className="flex flex-col items-start justify-center p-1">
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="py-3">{data.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <a target="_blank" href={data.source} className="border border-greylight-200 flex flex-row items-center justify-center  w-full py-1 rounded-xl gap-1 cursor-pointer">
                <TbSourceCode size={20} />
                Source
              </a>
              <a target="_blank" href={data.demo} className="border border-greylight-200 flex flex-row items-center justify-center  w-full py-1 rounded-xl gap-1 cursor-pointer">
                <BsGlobe2 size={20} />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
