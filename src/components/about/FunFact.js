import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="won medals in school" />
      <FunFactCard icon={<SiAntdesign />} des="07 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="100 hours of coding" />
      <FunFactCard icon={<IoLogoYoutube />} des="private account" />
    </div>
  );
};

export default FunFact;
