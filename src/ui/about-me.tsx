import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AboutMe() {
    return (
        <section className="flex flex-col p-8 bg-slate-900 items-center justify-around">
          <h2 className="font-extrabold  text-4xl m-5">About me</h2>
          <span className="text-2xl m-5">I am quite versatile in various different fields.</span> 
          <span className="text-2xl m-5">Always ready to tackle more challenges and grow at the end of it</span>
          <div>
            <ul>
              <Accordion className="text-2xl m-5">
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <span>Backend Engineering</span>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>Spring Boot</li>
                    <li>NestJS</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion className="text-2xl m-5">
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <span>Frontend Engineering</span>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>React</li>
                    <li>NextJS</li>
                    <li>Matplotlib</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion className="text-2xl m-5">
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <span>System Engineering</span>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>Rust</li>
                    <li>Compiler</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion className="text-2xl m-5">
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <span>Data Engineering</span>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>NumPy</li>
                    <li>Pandas</li>
                    <li>Matplotlib</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </ul>
          </div>
        </section>
    )
}