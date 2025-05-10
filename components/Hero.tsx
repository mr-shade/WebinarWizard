import React from "react";
import { siteConfig } from "@/config/site";
import CountdownTimer from "./CountdownTimer";
import RegistrationForm from "./RegistrationForm";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const { title, date, duration } = siteConfig.webinar;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  
  const formattedTime = new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className={`py-12 md:py-20 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Free Live Webinar
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-default-600 mb-6">
            Join us for an exclusive webinar where you'll learn cutting-edge digital marketing strategies that can transform your business.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formattedDate}</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formattedTime} ({duration})</span>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="font-medium mb-4">Webinar starts in:</p>
            <CountdownTimer targetDate={date} />
          </div>
        </div>
        
        <div id="register">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
