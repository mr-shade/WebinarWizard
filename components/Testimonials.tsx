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
    <div className={`${className} relative`}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl opacity-30 animate-float"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-300 to-white">What Others Are Saying</h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">Hear from professionals who have transformed their marketing approach</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="tech-card p-6 rounded-xl flex flex-col group relative overflow-hidden"
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-4 relative z-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:text-white transition-colors duration-300">
                  <path d="M16.6667 13.3333H10.0001C8.15913 13.3333 6.66675 14.8257 6.66675 16.6667V23.3333C6.66675 25.1743 8.15913 26.6667 10.0001 26.6667H13.3334C15.1744 26.6667 16.6667 25.1743 16.6667 23.3333V13.3333Z" fill="currentColor" />
                  <path d="M33.3334 13.3333H26.6667C24.8258 13.3333 23.3334 14.8257 23.3334 16.6667V23.3333C23.3334 25.1743 24.8258 26.6667 26.6667 26.6667H30.0001C31.841 26.6667 33.3334 25.1743 33.3334 23.3333V13.3333Z" fill="currentColor" />
                </svg>
              </div>

              <p className="text-white/80 mb-6 flex-grow italic relative z-10 group-hover:text-white/90 transition-colors duration-300">"{testimonial.quote}"</p>

              <div className="flex items-center mt-4 relative z-10">
                <div className="relative w-12 h-12 mr-4 group-hover:scale-110 transition-transform duration-300">
                  {/* Glowing effect for avatar */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                  <div className="relative rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-white group-hover:to-white transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>

              {/* Bottom line animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 tech-card rounded-xl backdrop-blur-md">
          <h3 className="text-xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Trusted by Leading Companies</h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center p-4 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors duration-300 group">
              <div className="text-white/40 group-hover:text-white/80 transition-colors duration-300 text-xl font-bold">Company 1</div>
            </div>
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center p-4 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors duration-300 group">
              <div className="text-white/40 group-hover:text-white/80 transition-colors duration-300 text-xl font-bold">Company 2</div>
            </div>
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center p-4 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors duration-300 group">
              <div className="text-white/40 group-hover:text-white/80 transition-colors duration-300 text-xl font-bold">Company 3</div>
            </div>
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center p-4 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors duration-300 group">
              <div className="text-white/40 group-hover:text-white/80 transition-colors duration-300 text-xl font-bold">Company 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
