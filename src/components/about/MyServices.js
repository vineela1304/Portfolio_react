import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="It involves building and maintaining websites using technologies like HTML, CSS, JavaScript, and backend frameworks. It focuses on functionality, performance, and database management."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="It focuses on the visual and user experience aspects of a website, including layout, colors, typography, and responsiveness. Web designers use tools like Figma, Adobe XD, and CSS frameworks."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="A high-performance programming language widely used in system programming, game development, and competitive programming. It supports both procedural and object-oriented paradigms."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle=" It is the foundation of efficient programming, helping in problem-solving and optimizing code. Key concepts include arrays, linked lists, trees, graphs, and sorting/searching algorithms."
      />
    </div>
  );
};

export default MyServices;
