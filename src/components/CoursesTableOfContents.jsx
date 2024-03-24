import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export default function CoursesTableOfContents() {
  const [activeTab, setActiveTab] = useState("programme 1: Nutrition & Weightlifting");
  const data = [
    {
      label: "Programme 1: Nutrition & Weightlifting",
      value: "programme 1: Nutrition & Weightlifting",
      desc: ["1.1. Bodybuilding is 80% dieting & 20% workout",
             "1.2. Why the medium calories, high protein, medium carbohydrates & low fat diet"],
    },
    {
      label: "Sample Article 1",
      value: "sample Article 1",
      desc: ["Because it's about motivating the doers. Because I'm here",
              "to follow my dreams and inspire other people to follow their dreams, too."],
    },
    {
      label: "Sample Video 1",
      value: "sample Video 1",
      desc: ["Because it's about motivating the doers. Because I'm here",
              "to follow my dreams and inspire other people to follow their dreams, too."],
    },
    {
      label: "Sample Article 2",
      value: "sample Article 2",
      desc: ["Because it's about motivating the doers. Because I'm here",
              "to follow my dreams and inspire other people to follow their dreams, too."],
    },
    {
      label: "Sample Video 2",
      value: "sample Video 2",
      desc: ["Because it's about motivating the doers. Because I'm here",
             "to follow my dreams and inspire other people to follow their dreams, too."],
    },
  ];
  return (

    <div className="flex flex-col items-center justify-around gap-10 py-10 mx-auto mb-10 max-w-screen-2xl">

     


        <Tabs value={activeTab}>
            <TabsHeader
                className="px-3 pt-20 space-x-5 bg-transparent border-b rounded-none border-blue-gray-50"
                indicatorProps={{
                className:
                    "bg-transparent mt-3 border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="p-10">
                  {desc.map((sentence, index) => (
                    <p key={index}>{sentence}</p> // Each sentence is rendered in its own div
                  ))}
                </TabPanel>
              ))}
            </TabsBody>

        </Tabs>
    </div>


  );
}