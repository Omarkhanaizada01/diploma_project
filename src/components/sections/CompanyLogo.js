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
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-[152px] flex justify-between items-center pt-[60px] pb-[60px]">
        {logos.map((logo, index) => (
          <div 
            key={logo.id}
            className="relative w-[66.94px] h-[32px] group"
            style={{
              marginRight: index !== logos.length - 1 ? "160px" : "0",
            }}
          >
           <div className="relative w-[66.94px] h-[32px]">
  <Image
    src={`/images/companyLogo/${logo.name}`}
    alt={`Company Logo ${logo.id}`}
    width={66.94}
    height={32}
    className="object-contain w-full h-full filter brightness-0 opacity-60 hover:opacity-100 hover:brightness-100 hover:invert-[74%] hover:sepia-[52%] hover:saturate-[1223%] hover:hue-rotate-[58deg] transition-all duration-300"
    style={{
      // Эти значения точно преобразуют #CCCCCC в #00B207
      filter: "invert(84%) sepia(0%) saturate(0%) hue-rotate(190deg) brightness(92%) contrast(92%)",
    }}
  />
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogo;