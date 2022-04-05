import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrapper } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";
import { slotFlagsText } from "@vue/shared";

const skills = [
  {
    name: "React",
    icon: images.react,
    bgColor: "",
  },
  {
    name: "Figma",
    icon: images.figma,
    bgColor: "",
  },
  {
    name: "Flutter",
    icon: images.flutter,
    bgColor: "",
  },
  {
    name: "Git",
    icon: images.git,
    bgColor: "",
  },
  {
    name: "Node",
    icon: images.node,
    bgColor: "",
  },
];

const experiences = [{}];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences.works.map((work, i) => (
            <>
              <motion.div
                key={i}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
              >
                
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(Skills, "skills");
