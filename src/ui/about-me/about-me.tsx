import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SectionHeading from '../section-heading';
import BackendEngineerIcon from '../icons/about-me/backend-engineer-icon';
import FrontendEngineerIcon from '../icons/about-me/frontend-engineer-icon';
import SystemEngineerIcon from '../icons/about-me/system-engineer-icon';
import DataEngineerIcon from '../icons/about-me/data-engineer-icon';
import { useState } from 'react';

export interface AboutMeAccordionProps {
  title: string,
  skills: string[],
  icon: React.ReactElement
};

const aboutMeSkills = [
  {
    title: 'Backend Engineering',
    skills: ['Spring Boot', 'NestJS'],
    icon: <BackendEngineerIcon />
  },
  {
    title: 'Frontend Engineering',
    skills: ['React', 'NextJS'],
    icon: <FrontendEngineerIcon />
  },
  {
    title: 'System Engineering',
    skills: ['Rust', 'Compiler'],
    icon: <SystemEngineerIcon />
  },
  {
    title: 'Data Engineering',
    skills: ['Spring Boot', 'NestJS'],
    icon: <DataEngineerIcon />
  }
]


export default function AboutMe() {
  const [isActive, setIsActive] = useState<string | false>('panel_0');
  const [expanded, setExpanded] = useState<string | false>('panel_0')

  const switchState = (panel : string) => {
      isActive && isActive === panel ? setIsActive(false) : setIsActive(panel);
      console.log(isActive);
  }
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }
    
  return (
      <section className="flex flex-col p-8 bg-slate-900 items-center justify-around">
        <SectionHeading>About me</SectionHeading>
        <span className="text-2xl m-5">I am quite versatile in various different fields.</span> 
        <span className="text-2xl m-5">Always ready to tackle more challenges and grow at the end of it</span>
        <div className="m-10">
            {aboutMeSkills.map((aboutMeSkill, index) =>
              <Accordion
                key={index}
                expanded={expanded === `Panel_${index}`}
                onChange={handleChange(`Panel_${index}`)}>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    onClick={() => switchState(`Panel_${index}`)}
                  >
                    <div className="flex flex-row group">
                      <div className={isActive === `Panel_${index}` ? "text-red-600" : "group-hover:text-red-600"}>
                          {aboutMeSkill.icon}
                      </div>
                      <span className={"ml-2 border-b" + (isActive === `Panel_${index}` ? " border-red-600" : " group-hover:border-red-600")}>{aboutMeSkill.title}</span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                      <ul>
                          {aboutMeSkill.skills.map(e => <li key={e}>{e}</li>)}
                      </ul>
                  </AccordionDetails>
              </Accordion>
            )}
        </div>
        <div className='text-xl'>
          <p>I have also done various projects to improve my skills, which is shown in the next part ;)</p>
        </div>
      </section>
  )
}