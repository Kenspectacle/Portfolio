import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SectionHeading from './section-heading';

export default function AboutMe() {
    return (
        <section className="flex flex-col p-8 bg-slate-900 items-center justify-around">
          <SectionHeading>About me</SectionHeading>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18m-.405 13.435c-.49.35-1.074.542-1.676.549c-1.04 0-1.993-.563-2.715-1.603a6.4 6.4 0 0 1-1.041-3.337a.11.11 0 0 1 .073-.102l.708-.317a.11.11 0 0 1 .122.02q.015.017.023.037c0 .015.014.029.014.043c0 1.18.318 2.297.882 3.121c.534.78 1.228 1.2 1.95 1.2c.391 0 .774-.116 1.098-.333a.12.12 0 0 1 .144.03c.144.187.29.36.448.533a.16.16 0 0 1-.03.16m5.216-1.054c-.709 1.026-1.677 1.603-2.716 1.603c-1.038 0-1.993-.577-2.715-1.603c-.679-.982-1.054-2.283-1.054-3.66c0-1.27.737-2.267 1.661-2.267s1.662.997 1.662 2.267a6.6 6.6 0 0 1-.766 3.18a.103.103 0 0 1-.144.043c-.014 0-.014-.015-.03-.03c-.086-.1-.173-.201-.245-.303a4 4 0 0 1-.236-.39a.13.13 0 0 1 0-.1a6.05 6.05 0 0 0 .492-2.414c0-.62-.319-1.329-.738-1.329s-.736.708-.736 1.33c0 1.18.317 2.296.881 3.12c.535.78 1.228 1.199 1.95 1.199c.723 0 1.417-.434 1.95-1.199c.564-.826.883-1.936.883-3.12c0-1.186-.317-2.292-.882-3.118a3.1 3.1 0 0 0-.579-.65a.13.13 0 0 1-.014-.16c.014-.014.03-.029.044-.029l.708-.317a.09.09 0 0 1 .118.028q.27.275.492.59c.68.983 1.055 2.284 1.055 3.66s-.363 2.687-1.041 3.669"/></svg>  
                  <span className="ml-2 border-b">Backend Engineering</span>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><defs><mask id="SVGqbqJgrTG"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path d="M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14"/><path fill="#555555" d="M44 18H18v26h26z"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGqbqJgrTG)"/></svg>
                  <span className="ml-2 border-b">Frontend Engineering</span>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><defs><mask id="SVG7auVBcPn"><path fill="#555555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Zm17-8a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm5 8H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVG7auVBcPn)"/></svg>
                  <span className="ml-2 border-b">System Engineering</span>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><defs><mask id="SVGwxOyzcPc"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M44 11v27c0 3.314-8.954 6-20 6S4 41.314 4 38V11"/><path d="M44 29c0 3.314-8.954 6-20 6S4 32.314 4 29m40-9c0 3.314-8.954 6-20 6S4 23.314 4 20"/><ellipse cx="24" cy="10" fill="#555555" rx="20" ry="6"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGwxOyzcPc)"/></svg>
                  <span className="ml-2 border-b">Data Engineering</span>
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
          <div className='text-xl'>
            <p>I have also done various projects to improve my skills, which is shown in the next part ;)</p>
          </div>
        </section>
    )
}