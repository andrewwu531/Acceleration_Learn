
import logo from "../images/logo5.png";
import Accordion from "./Accordion";



const weightliftingCourseAccordion = () => {

  const data = [
    {
      label: "Programme 1: Nutrition & Weightlifting",
      value: "programme 1: Nutrition & Weightlifting",
      desc: [
        {
          header: "Nutrition",
          points: [
            "1.1. Bodybuilding is 80% dieting & 20% workout",
            "1.2. Why the medium calories, high protein, medium carbohydrate & low fat diet",
            "1.3. Calculating your personalised recommended calories, protein, carbohydrate & fat intake",
            "1.4. The importance of food choices (meat, pasta, sauce, vegs, oil... )",
            "1.5. Carb cycling & the front heavy approach dieting",
            "1.6. Practical recipes & cooking appliances",
          ],
        },
        {
          header: "Weightlifting",
          points: [
            "2.1. Muscle Types & Training Methods",
            "2.2. Weightlifting Techniques",
            "2.3. A Practical Gym Session",
            "2.4. HIIT & Calisthenics & Plyometric",
          ],
        },
      ],
    }
  ]

  return (
    <div className="flex items-center justify-around h-screen">
      <a href="/">
        <img className="h-14" src={logo} alt="Logo" />
      </a>
      <div className="p-4">
        <Accordion
          title="Do you prefer Android or iOS"
          answer="I like to use iOS products"
        />
        <Accordion
          title="Do you prefer writing CSS or Tailwind?"
          answer="I like to use Tailwind"
        />
        <Accordion
          title="Firebase or Supabase?"
          answer="I am using Supabase!"
        />
      </div>
    </div>
  );
};

export default weightliftingCourseAccordion;