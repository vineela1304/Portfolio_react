import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="SRM"
          des="I am a B.Tech student with a passion for web development, problem-solving, and continuous learning."
        />
        <ResumeCard
          badge="2022 - 2026"
          title="Front-end Developer"
          subTitle="SRM"
          des="I am a B.Tech student with a passion for web development, problem-solving, and continuous learning."
        />
        <ResumeCard
          badge="2009 - 2010"
          title="CSE Student"
          subTitle="SRM"
          des="I am a B.Tech Computer Science student with a strong interest in web development, programming, and problem-solving."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2020 - 2026"
          title="SRM University"
          subTitle="AP"
          des="I am a B.Tech student with a passion for web development, problem-solving, and continuous learning."
        />
        <ResumeCard
          badge="2022 - 2026"
          title="Programming Course"
          subTitle="AP"
          des="I am a B.Tech Computer Science student with a strong interest in web development, programming, and problem-solving."
        />
        <ResumeCard
          badge="2022 - 2026"
          title="MERN Stack Developer"
          subTitle="SRM"
          des="I am passionate about web development and enjoy building user-friendly, efficient, and innovative web applications."
        />
      </div>
    </div>
  );
};

export default Education;
