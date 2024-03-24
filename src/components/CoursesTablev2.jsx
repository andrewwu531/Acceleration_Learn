import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export default function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("html");
   const data = [
    {
      label: "Programme 1: Nutrition & Weightlifting",
      value: "programme 1: Nutrition & Weightlifting",
      desc: ["Nutrition\n",
             "1.1. Bodybuilding is 80% dieting & 20% workout",
             "1.2. Why the medium calories, high protein, medium carbohydrate & low fat diet",
             "1.3. Calculating your personalised recommended calories, protein, carbohydrate & fat intake",
             "1.4. The importance of food choices (meat, pasta, sauce, vegs, oil... )",
             "1.5. Carb cycling & the front heavy approach dieting",
             "1.6. Practical recipes & cooking appliances",
             "Weightlifting",
             "2.1. "
             ],
    },
    {
      label: "Programme 2: Topic-Based Journals with Videos",
      value: "sample Article 1",
      desc: ["Because it's about motivating the doers. Because I'm here",
              "to follow my dreams and inspire other people to follow their dreams, too."],
    },
    {
      label: "Programme 3: The English Pronunciation & Speaking Course",
      value: "sample Video 1",
      desc: ["Because it's about motivating the doers. Because I'm here",
              "to follow my dreams and inspire other people to follow their dreams, too."],
    },
    {
      label: "Programme 4: The English Writing Course",
      value: "sample Article 2",
      desc: ["Because it's about motivating the doers. Because I'm here",
              "to follow my dreams and inspire other people to follow their dreams, too."],
    },
    {
      label: "Programme 5: The Business English Course",
      value: "sample Video 2",
      desc: ["Because it's about motivating the doers. Because I'm here",
             "to follow my dreams and inspire other people to follow their dreams, too."],
    },
  ];

  return (
    <div className="flex justify-center h-screen mx-auto xl:max-w-6xl lg:max-w-5xl" style={{ marginTop: '20vh' }}> 
        <Tabs value={activeTab}>
        <TabsHeader
            className="p-0 bg-transparent border-b rounded-none border-blue-gray-50"
            indicatorProps={{
            className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
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
            <TabPanel key={value} value={value}>
                {desc}
            </TabPanel>
            ))}
        </TabsBody>
        </Tabs>
    </div>
  );
}