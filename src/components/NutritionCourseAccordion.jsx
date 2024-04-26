import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
// import video1 from "../videos/video.mp4";

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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function NutritionCourseAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const data = [
    {
      title:
        "Course 1.1. Access our free Excel material & video tutorials in Instagram",
      contentType: "link",
      content:
        "https://docs.google.com/spreadsheets/d/1gALseVAuDNZkiI5-9Pr9iKx11e-FENTwjXZXvZqWLNo/edit?usp=sharing",
      pk: "1",
    },
    {
      title: "Course 1.2. Bodybuilding is 80% dieting & 20% workout",
      contentType: "video",
      content: "/videos/video.mp4",
      pk: "2",
    },
    {
      title:
        "Course 1.3. Why the medium calories, high protein, medium carbohydrate & low fat diet",
      contentType: "video",
      content: "/videos/video.mp4",
      pk: "3",
    },
    {
      title:
        "Course 1.4. Calculating your personalised recommended calories, protein, carbohydrate & fat intake",
      contentType: "text",
      content:
        "Easier to satisfy the macronutrient requirements \
      - you would not need to consume food excessively for one of the three meals. \
      In other words, if you eat less in the evening, you would require eating more in the morning \
      or afternoon to compensate for the lesser food consumption in the evening. \
      Heavy breakfast burns more calories than heavy lunch or dinner - \
      in science, it is ideal to eat a large meal in the morning. \
      Given equal quantity, the breakfast meal burns twice the calories compared to lunch or dinner. \
      This is beneficial for achieving caloric deficit to reduce fat for revealing a six pack. \
      It boosts energy and reduces hunger - you require high energy for breakfast \
      and lunch as you work during the day time. \
      Moreover, you require sufficient food consumption in the evening to prevent muscle loss while sleeping.",
      pk: "4",
    },
    {
      title:
        "Course 1.5. The importance of food choices: meat, pasta, sauce, vegs, oil",
      contentType: "link",
      content:
        "https://docs.google.com/spreadsheets/d/1gALseVAuDNZkiI5-9Pr9iKx11e-FENTwjXZXvZqWLNo/edit?usp=sharing",
      pk: "5",
    },
    {
      title: "Course 1.6. Carb cycling & the front heavy approach dieting",
      contentType: "text",
      content:
        "Easier to satisfy the macronutrient requirements \
      - you would not need to consume food excessively for one of the three meals.\
      In other words, if you eat less in the evening, you would require eating more in the morning \
      or afternoon to compensate for the lesser food consumption in the evening. ",
      pk: "6",
    },
    {
      title: "Course 1.7. Practical recipes & cooking appliances",
      contentType: "link",
      content:
        "https://docs.google.com/spreadsheets/d/1gALseVAuDNZkiI5-9Pr9iKx11e-FENTwjXZXvZqWLNo/edit?usp=sharing",
      pk: "7",
    },
  ];

  const renderContent = (contentType, content) => {
    switch (contentType) {
      case "video":
        return (
          <video
            src={content}
            controls
            autoPlay
            preload="auto"
            type="video/mp4"
            className="w-full"
          >
            Your browser does not support the video tag.
          </video>
        );
      case "link":
        return (
          <a
            href={content}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl underline underline-offset-2 text-grey-900 hover:text-grey-900"
          >
            {content}
          </a>
        );
      default:
        return <p className="text-xl">{content}</p>;
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center mx-atuo bg-gray-150"
      style={{ marginBottom: "10vh" }}
    >
      <div
        className="flex justify-center text-3xl font-semibold text-center xl:text-4xl"
        style={{ marginBottom: "5vh" }}
      >
        Shredded Body in 2 Months: Nutrition
      </div>

      <div style={{ width: "62vw" }}>
        {data.map(({ title, content, contentType, pk }) => (
          <Accordion
            key={title}
            value={title}
            open={open === pk}
            icon={<Icon id={pk} open={pk} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(pk)}
              className="mr-10 text-base text-gray-800 xl:text-lg"
            >
              {title}
            </AccordionHeader>
            <AccordionBody className="text-sm xl:text-base">
              {renderContent(contentType, content)}
            </AccordionBody>
          </Accordion>
        ))}
      </div>

      <div>
        <Button
          color="gray"
          className="flex items-center justify-center mx-auto text-2xl font-normal xl:text-3xl 2xl:text-4xl"
          style={{ marginTop: "7vh", width: "40vw", height: "18vh" }}
        >
          Yes - I Want Success
        </Button>
      </div>
    </div>
  );
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.string.isRequired,
};
