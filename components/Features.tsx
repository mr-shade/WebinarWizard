import React from "react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  const features: Feature[] = [
    {
      title: "Strategic Marketing Frameworks",
      description: "Learn proven frameworks that can be applied to any business to increase conversions and ROI.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
    },
    {
      title: "Advanced SEO Techniques",
      description: "Discover the latest SEO strategies that are working right now to drive organic traffic.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
    },
    {
      title: "Social Media Mastery",
      description: "Build a powerful social media presence that converts followers into paying customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
    },
    {
      title: "Content Creation Strategies",
      description: "Learn how to create compelling content that engages your audience and drives action.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      title: "Email Marketing Automation",
      description: "Set up automated email sequences that nurture leads and increase customer lifetime value.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      title: "Analytics & Data-Driven Decisions",
      description: "Learn how to use data to make informed marketing decisions that drive business growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <line x1="3" y1="20" x2="21" y2="20"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className={`${className} relative`}>
      {/* Background decorative elements */}
      <div className="absolute top-40 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl opacity-30 animate-float"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-300 to-white">What You'll Learn</h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">Master these cutting-edge strategies and transform your digital marketing approach</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="tech-card p-6 rounded-xl relative group overflow-hidden"
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon with glowing effect */}
              <div className="relative z-10 text-primary mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">{feature.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-white group-hover:to-white transition-colors duration-300">{feature.title}</h3>
              <p className="text-white/70 relative z-10 group-hover:text-white/90 transition-colors duration-300">{feature.description}</p>

              {/* Bottom line animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
