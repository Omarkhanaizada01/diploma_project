// src/components/sections/FeaturesSection.js
import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      icon: "/images/icons/delivery-truck 1.svg", // Замените на свои иконки
      title: "Free Shipping",
      description: "Free shipping on all your order"
    },
    {
      icon: "/images/icons/headphones 1.svg",
      title: "100% Refund",
      description: "Within 30 days for return"
    },
    {
      icon: "/images/icons/package.svg",
      title: "Support 24/7",
      description: "We support online 24 hours"
    },
    {
      icon: "/images/icons/shopping-bag.svg",
      title: "Payment Secure",
      description: "Your payment are safe with us"
    }
  ];

  return (
    <section className="w-full bg-white py-8 shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 flex-shrink-0">
                <Image 
                  src={feature.icon} 
                  alt={feature.title}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A]">{feature.title}</h3>
                <p className="text-sm text-[#666]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;