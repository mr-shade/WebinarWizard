import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SpeakerBio from "@/components/SpeakerBio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-8 md:py-10">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="scroll-mt-20">
        <Features />
      </section>

      {/* CTA Section */}
      <section>
        <CTA
          title="Don't Miss This Opportunity!"
          subtitle="Spaces are limited. Reserve your spot now to secure access to this exclusive webinar."
        />
      </section>

      {/* Speaker Bio Section */}
      <section id="speaker" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Your Host</h2>
        <SpeakerBio />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20">
        <FAQ />
      </section>

      {/* Final CTA Section */}
      <section>
        <CTA
          title="Ready to Transform Your Marketing Strategy?"
          subtitle="Join our webinar and learn proven techniques to grow your business."
          buttonText="Register Now"
        />
      </section>
    </div>
  );
}
