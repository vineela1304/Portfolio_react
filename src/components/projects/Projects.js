import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Grocery CRUD"
            category="Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="Todo-List"
            category="Design"
            image={workImgOne}
          />
          <ProjectsCard
            title="Projectile motion"
            category="C++"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Portfolio"
            category="HTML"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Event management system"
            category="DBMS"
            image={workImgFour}
          />
          <ProjectsCard
            title="Web dev course"
            category="Learning"
            image={workImgSix}
          />
          <ProjectsCard
            title="Portfolio"
            category="React"
            image={workImgEight}
          />
          <ProjectsCard
            title="Movie ticket booking"
            category="DSA"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
