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
    <div className={`py-12 md:py-20 relative overflow-hidden ${className}`}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-accent/10 rounded-full filter blur-3xl opacity-20 animate-float-fast"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="backdrop-blur-sm p-6 rounded-2xl">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10 shadow-lg animate-pulse-glow">
            Free Live Webinar
          </div>

          <h1 className="font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-300 to-white">
            {title}
          </h1>

          <p className="text-xl text-white/80 mb-6">
            Join us for an exclusive webinar where you'll learn cutting-edge digital marketing strategies that can transform your business.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex items-center tech-card px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formattedDate}</span>
            </div>

            <div className="flex items-center tech-card px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formattedTime} ({duration})</span>
            </div>
          </div>

          <div className="mb-8 tech-card p-6 backdrop-blur-md">
            <p className="font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Webinar starts in:</p>
            <CountdownTimer targetDate={date} />
          </div>
        </div>

        <div id="register" className="relative">
          {/* Glowing effect behind the form */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl filter blur-xl opacity-30 transform -rotate-2 scale-105"></div>
          <div className="relative z-10">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
