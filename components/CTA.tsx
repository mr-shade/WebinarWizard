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
    <div className={`bg-primary/10 rounded-2xl p-8 md:p-12 ${className}`}>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-default-600 mb-8">{subtitle}</p>
        
        <Button
          as="a"
          href={buttonHref}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            size: "lg",
          })}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CTA;
