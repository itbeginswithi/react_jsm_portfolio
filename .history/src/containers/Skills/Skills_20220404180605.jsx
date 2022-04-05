import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrapper, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";
import { slotFlagsText } from "@vue/shared";

const skills = [
  {
    name: "React",
    icon: images.react,
    bgColor: "#edf2f8",
  },
  {
    name: "Figma",
    icon: images.figma,
    bgColor: "#edf2f8",
  },
  {
    name: "Flutter",
    icon: images.flutter,
    bgColor: "#edf2f8",
  },
  {
    name: "Git",
    icon: images.git,
    bgColor: "#edf2f8",
  },
  {
    name: "Node",
    icon: images.node,
    bgColor: "#edf2f8",
  },
];

const experiences = [
  {
    works: [
      {
        name: "Backend Developer",
        company: "Meta",
        desc: "I worked with Nodejs and VR",
      },
      {
        name: "Blockchain",
        company: "Meta",
        desc: "I develop in solidity",
      },
    ],
    year: 2021,
  },
  {
    works: [
      {name: "Frontend Developer",
      company: "Google",
      desc: "I worked with Angular"},
    ],
    year: 2020
  }
];

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
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {
                  experience.works.map((work, i) => (
                    <>
                      <motion.div
                        key={i}
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        data-tip
                        data-for={work.name}
                        className="app__skills-exp-work app__flex"
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                        <ReactTooltip
                          id={work.name}
                          effect="solid"
                          className="skills-tooltip"
                        >
                          {work.desc}
                        </ReactTooltip>
                    </>
                  ))
                }
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrap(Skills, 'app__skills'), 
  'skills', 
  'app__whitebg'
)