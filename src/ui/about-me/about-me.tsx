import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SectionHeading from '../section-heading';
import AboutMeAccordion from './about-me-accordion';
import BackendEngineerIcon from '../icons/about-me/backend-engineer-icon';
import FrontendEngineerIcon from '../icons/about-me/frontend-engineer-icon';
import SystemEngineerIcon from '../icons/about-me/system-engineer-icon';
import DataEngineerIcon from '../icons/about-me/data-engineer-icon';

export interface AboutMeAccordionProps {
  title: string,
  skills: string[],
};

const SKILL_1 : AboutMeAccordionProps = {
  title: 'Backend Engineering',
  skills: ['Spring Boot', 'NestJS']
};

const SKILL_2 : AboutMeAccordionProps = {
  title: 'Frontend Engineering',
  skills: ['React', 'NextJS']
};

const SKILL_3 : AboutMeAccordionProps = {
  title: 'System Engineering',
  skills: ['Rust', 'Compiler']
};

const SKILL_4 : AboutMeAccordionProps = {
  title: 'Data Engineering',
  skills: ['Spring Boot', 'NestJS']
};



export default function AboutMe() {
    return (
        <section className="flex flex-col p-8 bg-slate-900 items-center justify-around">
          <SectionHeading>About me</SectionHeading>
          <span className="text-2xl m-5">I am quite versatile in various different fields.</span> 
          <span className="text-2xl m-5">Always ready to tackle more challenges and grow at the end of it</span>
          <div>
            <ul>
              <AboutMeAccordion accordionDetails={SKILL_1} Icon={<BackendEngineerIcon />}/>
              <AboutMeAccordion accordionDetails={SKILL_2} Icon={<FrontendEngineerIcon />}/>
              <AboutMeAccordion accordionDetails={SKILL_3} Icon={<SystemEngineerIcon />}/>
              <AboutMeAccordion accordionDetails={SKILL_4} Icon={<DataEngineerIcon />}/>
            </ul>
          </div>
          <div className='text-xl'>
            <p>I have also done various projects to improve my skills, which is shown in the next part ;)</p>
          </div>
        </section>
    )
}