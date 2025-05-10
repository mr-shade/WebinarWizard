"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "How long is the webinar?",
      answer: "The webinar will last approximately 90 minutes, including a Q&A session at the end where you can ask specific questions about your marketing challenges.",
    },
    {
      question: "Will there be a replay available?",
      answer: "Yes, a replay will be available for all registered participants for 7 days after the live webinar. However, we highly recommend attending live to participate in the Q&A session.",
    },
    {
      question: "Do I need any special software to join?",
      answer: "No, you only need a web browser to join. We'll be using Zoom for the webinar, and you'll receive a link to join after registering.",
    },
    {
      question: "Is this webinar suitable for beginners?",
      answer: "Absolutely! While we'll cover some advanced strategies, the webinar is designed to provide value for marketers at all levels, from beginners to experienced professionals.",
    },
    {
      question: "Will I receive any materials after the webinar?",
      answer: "Yes, all participants will receive a digital workbook, slides from the presentation, and additional resources to help implement the strategies discussed.",
    },
    {
      question: "Can I ask questions during the webinar?",
      answer: "Yes, there will be a dedicated Q&A session at the end of the webinar where you can ask questions. You can also submit questions in advance when you register.",
    },
  ];

  return (
    <div className={`${className}`}>
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-default-50 rounded-lg hover:bg-default-100 transition-colors duration-200 text-left"
            >
              <span className="font-medium text-lg">{item.question}</span>
              <span className="text-primary">
                {openIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="12" x2="6" y2="12"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                )}
              </span>
            </button>
            
            {openIndex === index && (
              <div className="p-4 bg-default-50 rounded-b-lg mt-px">
                <p className="text-default-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
        <Button
          color="primary"
          variant="flat"
          size="lg"
          as="a"
          href="mailto:support@webinarwizard.com"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default FAQ;
