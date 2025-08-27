import React from "react";
import Image from "next/image";
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
    <section className="py-10 bg-[#F2F2F2] relative mt-[120px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
    <div className="w-full max-w-[424px] h-[254px] relative bg-white rounded-lg shadow-[0px_10px_20px_0px_#00000003] p-6">
      {/* Quote icon */}
      <div className="w-8 h-[26px] relative mb-4">
        <Image 
          src="/images/icons/quote vector.png" 
          alt="Quote" 
          width={32}
          height={26}
          style={{ width: '32px', height: 'auto' }}
          className="opacity-30"
        />
      </div>
      
      {/* Testimonial text */}
      <p className="text-[#4D4D4D] text-sm font-normal font-poppins leading-[150%] w-full">
        {text}
      </p>
      
      {/* Client info */}
      <div className="flex justify-between items-center w-full pt-2 mt-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-14 h-14 relative">
            <Image 
              src={avatar} 
              alt={name}
              width={56}
              height={56}
              style={{ width: '56px', height: 'auto' }}
              className="rounded-full"
            />
          </div>
          
          {/* Info */}
          <div>
            <h4 className="text-[#1A1A1A] text-base font-medium font-poppins leading-[150%]">
              {name}
            </h4>
            <p className="text-[#1A1A1A] text-sm font-normal font-poppins leading-[150%]">
              {role}
            </p>
          </div>
        </div>
        
        {/* Rating */}
        <div className="w-[104px] h-5 relative">
          <Image 
            src="/images/icons/rating.svg" 
            alt="Rating" 
            width={104}
            height={20}
            style={{ width: '104px', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;