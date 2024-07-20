import React, { useState } from "react";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 px-4 bg-white rounded-lg shadow-md mb-4">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center"
      >
        <span className="text-left font-medium text-gray-800">{title}</span>
        <svg
          className="fill-[#68f0fa] shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pt-4">{answer}</div>
      </div>
    </div>
  );
};

const AccordionSection: React.FC = () => {
  const accordionData = [
    {
      title: "How does Do4Me work?",
      answer:
        "Do4Me connects users with local artisans and professionals. Users can request services, get surveys, and book appointments through our platform.",
    },
    {
      title: "What types of services are available?",
      answer:
        "Do4Me offers a wide range of services including plumbing, electrical work, carpentry, cleaning, and more. You can browse our categories to see all available services.",
    },
    {
      title: "How do I request a survey?",
      answer:
        "After selecting a service, you can request a survey. An artisan will visit your location to assess the job and provide an estimate before you commit to the service.",
    },
    {
      title: "How are payments handled?",
      answer:
        "Payments are processed securely through our platform. You can pay for services using various methods after the job is completed to your satisfaction.",
    },
    {
      title: "Can I leave reviews for artisans?",
      answer:
        "Yes, we encourage users to leave reviews after each completed service. This helps maintain quality and assists other users in choosing artisans.",
    },
    {
      title: "What if I'm not satisfied with a service?",
      answer:
        "If you're not satisfied, please contact our customer support. We'll work with you and the artisan to resolve any issues and ensure your satisfaction.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        {accordionData.map((item, index) => (
          <Accordion key={index} title={item.title} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default AccordionSection;
