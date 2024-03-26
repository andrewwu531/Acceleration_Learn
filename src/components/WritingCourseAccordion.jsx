import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function WritingCourseAccordion() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

   const data = [
    {
      title: "Course 2.1. Muscle Types & Training Methods",
      content: "Hi1",
      pk: "1",
    },
    {
      title: "Course 2.2. Weightlifting Techniques",
      content: "https://docs.google.com/spreadsheets/d/1gALseVAuDNZkiI5-9Pr9iKx11e-FENTwjXZXvZqWLNo/edit?usp=sharing",
      pk: "2",
    },
    {
      title: "Course 2.3. A Practical Gym Session",
      content: "Hi",
      pk: "3",
    },    
    {
      title: "Course 2.4. HIIT & Calisthenics & Plyometric",  
      content: "Hi",
      pk: "4",
    },    
  ]
 
  return (

     <div className="flex flex-col items-center justify-center mx-atuo bg-gray-150" style={{ marginBottom: "10vh"}}>

      <div>

        <div className="flex justify-center text-3xl font-semibold text-center xl:text-4xl"  style={{ marginBottom: "5vh"}}>
            The Ultimate Writing Class
        </div>  

        <div style={{ width: "62vw" }}>
      
        {data.map(({ title, content, pk }) => (
            <Accordion key={title} value={title} open={open === pk} icon={<Icon id={pk} open={pk} />}>
                <AccordionHeader onClick={() => handleOpen(pk)} className="mr-10 text-base text-gray-800 xl:text-lg">{title}</AccordionHeader>
                <AccordionBody className="text-sm xl:text-base">{content}</AccordionBody>
            </Accordion>
        ))}

        </div>
      
      </div>
    </div>
  );
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.string.isRequired,
};