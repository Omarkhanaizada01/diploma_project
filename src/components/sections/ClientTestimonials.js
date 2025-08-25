import React from "react";
import HeadingWithArrows from '@/components/ui/headings/HeadingWithArrows';

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Robert Fox",
      role: "Customer",
      avatar: "/images/clientsAvatar/avatar 1.svg",
    },
    {
      id: 2,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Jane Smith",
      role: "Client",
      avatar: "/images/clientsAvatar/avatar 2.svg",
    },
    {
      id: 3,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "John Doe",
      role: "Buyer",
      avatar: "/images/clientsAvatar/avatar 3.svg",
    },
  ];

  return (
    <section className="py-10 bg-[#F2F2F2] relative mt-[120 px]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <HeadingWithArrows />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ text, name, role, avatar }) => {
  return (
    <div className="w-[424px] h-[254px] relative bg-white rounded-lg shadow-[0px_10px_20px_0px_#00000003] p-6">
      {/* Quote icon */}
      <img 
        src="/images/icons/quote vector.png" 
        alt="Quote" 
        className="w-8 h-[26px] opacity-30 mb-4"
      />
      
      {/* Testimonial text */}
      <p className="text-[#4D4D4D] text-sm font-normal font-poppins leading-[150%] w-[376px] h-[84px]">
        {text}
      </p>
      
      {/* Client info */}
      <div className="flex justify-between items-center w-[376px] h-16 pt-2 mt-4">
        <div className="flex items-center gap-3 w-[168px] h-14">
          {/* Avatar */}
          <img 
            src={avatar} 
            alt={name} 
            className="w-14 h-14"
          />
          
          {/* Info */}
          <div className="w-[84px] h-[45px]">
            <h4 className="text-[#1A1A1A] text-base font-medium font-poppins leading-[150%]">
              {name}
            </h4>
            <p className="text-[#1A1A1A] text-sm font-normal font-poppins leading-[150%]">
              {role}
            </p>
          </div>
        </div>
        
        {/* Rating */}
        <img 
          src="/images/icons/rating.svg" 
          alt="Rating" 
          className="w-[104px] h-5"
        />
      </div>
    </div>
  );
};

export default ClientTestimonials;