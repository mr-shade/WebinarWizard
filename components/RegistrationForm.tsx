"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

interface RegistrationFormProps {
  className?: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate form
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Mock API call - in a real app, you would send this to your backend
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg ${className}`}>
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">Registration Successful!</h3>
          <p className="text-white/80">
            Thank you for registering for our webinar. We've sent the details to your email.
          </p>
          <Button
            className="mt-6 glow-button"
            onClick={() => setIsSubmitted(false)}
          >
            Register Another Person
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Reserve Your Spot Now</h3>

          {error && (
            <div className="mb-6 p-4 bg-accent/10 text-accent border border-accent/30 rounded-lg backdrop-blur-sm">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                isRequired
                variant="bordered"
                radius="lg"
                classNames={{
                  inputWrapper: "bg-white/5 border-white/10 backdrop-blur-sm",
                  input: "text-white",
                  label: "text-white/70"
                }}
              />
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>

            <div className="relative">
              <Input
                type="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                isRequired
                variant="bordered"
                radius="lg"
                classNames={{
                  inputWrapper: "bg-white/5 border-white/10 backdrop-blur-sm",
                  input: "text-white",
                  label: "text-white/70"
                }}
              />
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>

            <Button
              type="submit"
              className="w-full glow-button py-6 rounded-xl text-white font-medium text-lg"
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register for Free"}
            </Button>

            <p className="text-xs text-white/50 text-center mt-4">
              By registering, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
