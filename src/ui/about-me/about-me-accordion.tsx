import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

import type { AboutMeAccordionProps } from './about-me'

export default function AboutMeAccordion({accordionDetails, Icon } :  {accordionDetails : AboutMeAccordionProps, Icon : React.ReactElement}) {
    const [isActive, setIsActive] = useState(false);
    const switchState = () => {
        isActive ? setIsActive(false) : setIsActive(true);
        console.log(isActive);
    }
    
    return (
        <Accordion className="text-2xl m-5">
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                onClick={switchState}
            >
                
                <div className="flex flex-row ">
                    <div className={isActive ? "text-red-600" : ""}>
                        {Icon}
                    </div>
                    <span className={isActive ? " ml-2 border-b border-red-600" : "ml-2 border-b"}>{accordionDetails.title}</span>
                </div>
                
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                    {accordionDetails.skills.map(e => <li key={e}>{e}</li>)}
                </ul>
            </AccordionDetails>
        </Accordion>
    );
}