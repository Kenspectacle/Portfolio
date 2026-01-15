import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import type { AboutMeAccordionProps } from './about-me'

export default function AboutMeAccordion({accordionDetails, Icon } :  {accordionDetails : AboutMeAccordionProps, Icon : React.ReactElement}) {
    return (
        <Accordion className="text-2xl m-5">
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                {Icon}
                <span className="ml-2 border-b">{accordionDetails.title}</span>
            </AccordionSummary>
            <AccordionDetails>
                <ul>
                    {accordionDetails.skills.map(e => <li key={e}>{e}</li>)}
                </ul>
            </AccordionDetails>
        </Accordion>
    );
}