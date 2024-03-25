import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import WeightliftingBanner2 from "../images/weightliftingBanner2.png";

 
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
 
export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

   const data = [
    {
      title: "Course 1.1. Access our free Excel material",
      content: "https://docs.google.com/spreadsheets/d/1gALseVAuDNZkiI5-9Pr9iKx11e-FENTwjXZXvZqWLNo/edit?usp=sharing",
      pk: "1",
    },
    {
      title: "Course 1.2. Bodybuilding is 80% dieting & 20% workout",
      content: "Hi",
      pk: "2",
    },    
    {
      title: "Course 1.3. Why the medium calories, high protein, medium carbohydrate & low fat diet",
      content: "Hi",
      pk: "3",
    },    
    {
      title: "Course 1.4. Calculating your personalised recommended calories, protein, carbohydrate & fat intake",
      content: "Hi",
      pk: "4",
    }, 
    {
      title: "Course 1.5. The importance of food choices (meat, pasta, sauce, vegs, oil... )",
      content: "Hi",
      pk: "5",
    }, 
    {
      title: "Course 1.6. Carb cycling & the front heavy approach dieting",
      content: "Hi",
      pk: "6",
    }, 
    {
      title: "Course 1.7. Practical recipes & cooking appliances",
      content: "Hi",
      pk: "7",
    }, 
  ]
 
  return (

     <div className="flex flex-col items-center justify-center pb-10 mb-10 mx-atuo bg-gray-150">

      <div className="text-4xl font-semibold underline"  style={{ marginTop: "9vh"}}>
            The Only Nutrition and Weightlifting Programme You Will Ever Need!
      </div>  
      
      <img 
        src={WeightliftingBanner2} 
        alt="WeightliftingBanner2" 
        style={{ marginTop: "6vh", marginBottom: "5vh", height: "40vh", width: "80vh" }}
        className="rounded-lg"
      />

      <div>
      
        {data.map(({ title, content, pk }) => (
            <Accordion key={title} value={title} open={open === pk} icon={<Icon id={pk} open={pk} />}>
                <AccordionHeader onClick={() => handleOpen(pk)} className="text-base text-gray-800 xl:text-lg">{title}</AccordionHeader>
                <AccordionBody className="text-sm xl:text-base">{content}</AccordionBody>
            </Accordion>
        ))}
      
      </div>
    </div>
  );
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.string.isRequired,
};