// components/ui/cards/BigProductCard/BigProductCard.jsx
'use client';
import Image from 'next/image';
import { useState } from 'react';
import Tag from '@/components/ui/Tag/Tag';

const BigProductCard = ({ 
  title = "Chinese cabbage",
  price = "$4.99",
  originalPrice = "$9.99",
  ratingCount = 48,
  tags = ['sale', 'best'],
  timeLeft = "02:23:12:45"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative w-[528px] h-[654px] bg-white border ${isHovered ? 'border-[#2C742F] shadow-[0_0_12px_0_rgba(32,181,38,0.32)]' : 'border-[#E6E6E6]'} transition-all`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Теги */}
      <div className="absolute left-[25px] top-[25px] flex gap-[8px] z-10">
        {tags.includes('sale') && (
          <div className="bg-red-500 text-white text-xs font-medium rounded px-2 h-[27px] flex items-center justify-center whitespace-nowrap">
            Sale 50%
          </div>
        )}
        {tags.includes('best') && <Tag type="best" />}
      </div>

      {/* Основное изображение */}
      <div className="absolute top-0 left-0 w-[527px] h-[448px] overflow-hidden">
        <Image
          src="/images/products/big apple.svg"
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Кнопочная панель */}
      <div className="absolute top-[378px] left-0 w-[527px] h-[46px] px-[24px] flex items-center gap-[8px]">
        {/* Иконка wishlist (без изменений при hover) */}
        <button className="w-[45px] h-[45px] flex items-center justify-center">
          <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23.5" cy="23" r="23" fill="#F2F2F2"/>
            <path 
              d="M23.4996 30.5451C6.83328 21.3333 18.4999 11.3333 23.4996 17.6567C28.4999 11.3333 40.1666 21.3333 23.4996 30.5451Z" 
              stroke="#1A1A1A" 
              strokeWidth="1.5"
            />
          </svg>
        </button>
        
        {/* Основная кнопка */}
        <button className={`flex-1 h-[45px] rounded-[43px] flex items-center justify-center gap-[12px] px-[32px] transition-colors ${
          isHovered ? 'bg-[#00B207] text-white' : 'bg-[#F2F2F2]'
        }`}>
          <span className="font-medium">Add to Cart</span>
          
          {/* Иконка корзины (меняется при hover) */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M8 10H5.5L4 16H17L15.5 10H13M8 10V7.5C8 5.567 9.567 4 11.5 4V4C13.433 4 15 5.567 15 7.5V10M8 10H15M8 10V12.5M15 10V12.5" 
              stroke={isHovered ? "white" : "#1A1A1A"}
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Иконка quick view (без изменений) */}
        <button className="w-[45px] h-[45px] flex items-center justify-center">
          <Image 
            src="/images/icons/gray quick view.svg" 
            alt="Quick view" 
            width={46} 
            height={46}
          />
        </button>
      </div>

      {/* Остальной код без изменений */}
      <div className="absolute bottom-[105px] left-0 right-0 px-[24px] flex flex-col items-center gap-[4px]">
        <h3 className="w-full text-[#4D4D4D] text-[18px] font-normal text-center leading-[27px]">
          {title}
        </h3>

        <div className="flex items-center gap-[4px]">
          <span className="text-[24px] font-bold">{price}</span>
          <span className="text-[16px] text-gray-400 line-through">{originalPrice}</span>
        </div>

        <div className="flex items-center gap-[4px]">
          <Image 
            src="/images/icons/rating.svg" 
            alt="Rating" 
            width={60} 
            height={12}
          />
          <span className="text-[14px] text-gray-400">({ratingCount})</span>
        </div>
      </div>

      <div className="absolute bottom-[24px] left-0 right-0 flex flex-col items-center gap-[8px]">
        <p className="text-[#999999] text-[14px] leading-[18px]">
          Hurry up! Offer ends In:
        </p>
        
        <div className="flex gap-[12px]">
          {timeLeft.split(':').map((unit, index) => (
            <div key={index} className="flex items-center gap-[4px]">
              <span className="font-bold">{unit}</span>
              <span className="text-xs text-gray-400">
                {['days', 'hours', 'mins', 'secs'][index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigProductCard;
