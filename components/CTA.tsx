import React from "react";
import { Button } from "@heroui/button";
import { button as buttonStyles } from "@heroui/theme";

interface CTAProps {
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

const CTA: React.FC<CTAProps> = ({
  className,
  title = "Ready to Transform Your Marketing Strategy?",
  subtitle = "Join our webinar and learn proven techniques to grow your business.",
  buttonText = "Register Now",
  buttonHref = "#register",
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

      {/* Animated orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl opacity-70 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full filter blur-3xl opacity-70 animate-float"></div>

      {/* Content */}
      <div className="relative z-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-300 to-white">{title}</h2>
          <p className="text-xl text-white/80 mb-8">{subtitle}</p>

          <div className="relative group inline-block">
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>

            <Button
              as="a"
              href={buttonHref}
              className="relative glow-button py-6 px-10 rounded-full text-white font-medium text-lg group-hover:scale-105 transition-transform duration-300"
            >
              {buttonText}

              {/* Arrow icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
