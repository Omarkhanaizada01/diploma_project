// components/ui/Banner.jsx
'use client';

import Image from 'next/image';
import ArrowButton from '@/components/ui/buttons/ArrowButton';

const Banner = ({ 
  imageSrc, 
  topText, 
  mainTitle, 
  buttonText = "Shop now",
  timer,
  price,
  discount,
}) => {
  return (
    <div className="relative w-[424px] h-[536px] rounded-lg overflow-hidden">
      <Image 
        src={imageSrc}
        alt={mainTitle}
        fill
        className="object-cover"
        quality={100}
      />
      
      <div className="relative z-10 h-full flex flex-col items-center pt-[35px] text-white">
        {/* Верхний текст */}
        <p className="w-full text-center uppercase font-poppins font-medium text-[14px] leading-[100%] tracking-[0.03em]">
          {topText}
        </p>
        
        {/* Основной заголовок */}
        <h3 className="w-full text-center font-poppins font-semibold text-[40px] leading-[120%] mt-[16px] mb-2"> {/* 8px отступ после заголовка */}
          {mainTitle}
        </h3>
        
        {/* Динамический контент */}
        <div className="mb-6"> {/* 24px отступ перед кнопкой */}
          {timer && (
            <div className="flex gap-2">
              {Object.entries(timer).map(([unit, value]) => (
                <div key={unit} className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded">
                  <span className="font-bold">{value}</span> {unit}
                </div>
              ))}
            </div>
          )}
          
          {price && (
            <p className="text-center font-medium text-lg">{price}</p>
          )}
          
          {discount && (
            <div className="bg-black text-white px-4 py-2 rounded-md font-bold inline-block">
              {discount}% OFF
            </div>
          )}
        </div>
        
        {/* Кнопка */}
        <ArrowButton 
          variant="white" 
          className="w-[162px] h-[45px] !px-[32px] !py-[14px]"
        >
          {buttonText}
        </ArrowButton>
      </div>
    </div>
  );
};

export default Banner;