import React from "react";
import Image from "next/image";

const CompanyLogo = () => {
  // Массив логотипов (формат PNG)
  const logos = [
    { id: 1, name: "logo 1.png" },
    { id: 2, name: "logo 2.png" },
    { id: 3, name: "logo 3.png" },
    { id: 4, name: "logo 4.png" },
    { id: 5, name: "logo 5.png" },
    { id: 6, name: "logo 6.png" },
  ];

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-[152px] flex flex-wrap justify-center items-center gap-50 pt-[60px] pb-[60px] ">
        {logos.map((logo) => (
          <div 
            key={logo.id}
            className="relative w-[66.94px] h-[32px] group transition-all duration-300 hover:scale-105"
          >
            <Image
              src={`/images/companyLogo/${logo.name}`}
              alt={`Company Logo ${logo.id}`}
              width={67}
              height={32}
              style={{ 
                width: '67px', 
                height: 'auto',
                filter: "invert(84%) sepia(0%) saturate(0%) hue-rotate(190deg) brightness(92%) contrast(92%)"
              }}
              className="object-contain opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-[74%] group-hover:sepia-[52%] group-hover:saturate-[1223%] group-hover:hue-rotate-[58deg]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogo;