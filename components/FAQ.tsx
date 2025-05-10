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
    <div className={`${className} relative`}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl opacity-30 animate-float"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-300 to-white">Frequently Asked Questions</h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">Everything you need to know about our webinar</p>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-6 relative group">
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 filter blur-md transition-opacity duration-300"></div>

              <div className="relative">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 text-left ${
                    openIndex === index
                      ? 'bg-white/10 border-primary/30'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <span className="font-medium text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-colors duration-300">{item.question}</span>
                  <span className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 bg-white/5 backdrop-blur-sm border-t-0 border border-white/10 rounded-b-xl">
                    <p className="text-white/80">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 tech-card p-8 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Still have questions?</h3>
          <p className="text-white/70 mb-6">Our team is ready to answer any questions you might have about the webinar</p>
          <Button
            className="glow-button py-6 px-8 rounded-xl text-white font-medium"
            as="a"
            href="mailto:support@webinarwizard.com"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
