export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "WebinarWizard",
  description: "High-Converting Webinar Landing Page Template",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Speaker",
      href: "#speaker",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Speaker",
      href: "#speaker",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
    {
      label: "Register Now",
      href: "#register",
    },
  ],
  links: {
    twitter: "https://twitter.com/webinarwizard",
    facebook: "https://facebook.com/webinarwizard",
    instagram: "https://instagram.com/webinarwizard",
    linkedin: "https://linkedin.com/company/webinarwizard",
  },
  webinar: {
    title: "Master the Art of Digital Marketing",
    date: "2023-12-15T10:00:00",
    duration: "90 minutes",
    speaker: {
      name: "Jane Smith",
      title: "Digital Marketing Expert",
      bio: "Jane Smith is a renowned digital marketing expert with over 15 years of experience helping businesses grow their online presence. She has worked with Fortune 500 companies and startups alike, delivering exceptional results through innovative marketing strategies.",
      image: "/assets/images/speaker.jpg"
    }
  }
};
