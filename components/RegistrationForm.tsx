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
    <div className={`bg-default-50 p-6 rounded-xl shadow-md ${className}`}>
      {isSubmitted ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-bold text-primary mb-2">Registration Successful!</h3>
          <p className="text-default-600">
            Thank you for registering for our webinar. We've sent the details to your email.
          </p>
          <Button 
            color="primary"
            variant="flat"
            className="mt-4"
            onClick={() => setIsSubmitted(false)}
          >
            Register Another Person
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold mb-4">Reserve Your Spot Now</h3>
          
          {error && (
            <div className="mb-4 p-3 bg-danger-50 text-danger border border-danger rounded-lg">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <Input
              type="text"
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              isRequired
              variant="bordered"
              radius="sm"
            />
            
            <Input
              type="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              isRequired
              variant="bordered"
              radius="sm"
            />
            
            <Button
              type="submit"
              color="primary"
              className="w-full"
              isLoading={isSubmitting}
              size="lg"
            >
              {isSubmitting ? "Registering..." : "Register for Free"}
            </Button>
            
            <p className="text-xs text-default-500 text-center mt-2">
              By registering, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
