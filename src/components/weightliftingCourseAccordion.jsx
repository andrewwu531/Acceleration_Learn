
import coachAvatar from "../images/CoachAvatar.png";
import { Avatar } from "@material-tailwind/react";
import Accordion from "./Accordion";



const weightliftingCourseAccordion = () => {

          // "1.1. Bodybuilding is 80% dieting & 20% workout",
          //   "1.2. Why the medium calories, high protein, medium carbohydrate & low fat diet",
          //   "1.3. Calculating your personalised recommended calories, protein, carbohydrate & fat intake",
          //   "1.4. The importance of food choices (meat, pasta, sauce, vegs, oil... )",
          //   "1.5. Carb cycling & the front heavy approach dieting",
          //   "1.6. Practical recipes & cooking appliances",

  const data = [
    {
      title: "Lesson 1.1. Access our free Excel resource",
      content: "Hi",
    },
    {
      title: "Lesson 1.2. Bodybuilding is 80% dieting & 20% workout",
      content: "Hi",
    },    
    {
      title: "Lesson 1.3. Why the medium calories, high protein, medium carbohydrate & low fat diet",
      content: "Hi",
    },    
    {
      title: "Lesson 1.4. Calculating your personalised recommended calories, protein, carbohydrate & fat intake",
      content: "Hi",
    }, 
    {
      title: "Lesson 1.5. The importance of food choices (meat, pasta, sauce, vegs, oil... )",
      content: "Hi",
    }, 
    {
      title: "Lesson 1.6. Carb cycling & the front heavy approach dieting",
      content: "Hi",
    }, 
    {
      title: "Lesson 1.6. Practical recipes & cooking appliances",
      content: "Hi",
    }, 
  ]

  return (
    <div className="flex items-center justify-around h-screen bg-gray-150" style={{ marginleft: "15vw", marginRight: "10vw" }}>

      
    
      <Avatar src={coachAvatar} alt="CoachAvatar" style={{ height: "20vw", width: "20vw" }}/>

      <div>
        {data.map(({ title, content }) => (
            
          <Accordion key={title} value={title} title={title} descriptions={content} />
        ))}

      
      </div>
    </div>
  );
};

export default weightliftingCourseAccordion;