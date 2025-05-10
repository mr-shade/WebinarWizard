import React from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const testimonials: Testimonial[] = [
    {
      quote: "This webinar completely transformed our marketing strategy. We've seen a 200% increase in conversions since implementing the techniques shared by Jane.",
      name: "Michael Johnson",
      title: "Marketing Director",
      company: "TechGrowth Inc.",
      image: "/assets/images/testimonial1.jpg",
    },
    {
      quote: "The frameworks taught in this webinar helped us streamline our marketing efforts and focus on what truly drives results. Highly recommended!",
      name: "Sarah Williams",
      title: "CEO",
      company: "Digital Spark",
      image: "/assets/images/testimonial2.jpg",
    },
    {
      quote: "Jane's insights into digital marketing trends were eye-opening. We've already implemented several strategies and are seeing significant improvements.",
      name: "David Chen",
      title: "Founder",
      company: "StartupBoost",
      image: "/assets/images/testimonial3.jpg",
    },
  ];

  return (
    <div className={`${className}`}>
      <h2 className="text-3xl font-bold text-center mb-12">What Others Are Saying</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-default-50 p-6 rounded-xl shadow-md flex flex-col"
          >
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 13.3333H10.0001C8.15913 13.3333 6.66675 14.8257 6.66675 16.6667V23.3333C6.66675 25.1743 8.15913 26.6667 10.0001 26.6667H13.3334C15.1744 26.6667 16.6667 25.1743 16.6667 23.3333V13.3333Z" fill="currentColor" className="text-primary/30" />
                <path d="M33.3334 13.3333H26.6667C24.8258 13.3333 23.3334 14.8257 23.3334 16.6667V23.3333C23.3334 25.1743 24.8258 26.6667 26.6667 26.6667H30.0001C31.841 26.6667 33.3334 25.1743 33.3334 23.3333V13.3333Z" fill="currentColor" className="text-primary/30" />
              </svg>
            </div>
            
            <p className="text-default-600 mb-6 flex-grow italic">"{testimonial.quote}"</p>
            
            <div className="flex items-center mt-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-default-500">{testimonial.title}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <div className="flex items-center space-x-8">
          <img src="/assets/images/company1.svg" alt="Company 1" className="h-8 grayscale opacity-70" />
          <img src="/assets/images/company2.svg" alt="Company 2" className="h-8 grayscale opacity-70" />
          <img src="/assets/images/company3.svg" alt="Company 3" className="h-8 grayscale opacity-70" />
          <img src="/assets/images/company4.svg" alt="Company 4" className="h-8 grayscale opacity-70" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
