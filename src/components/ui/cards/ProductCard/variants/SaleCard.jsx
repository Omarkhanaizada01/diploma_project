// src/components/ui/cards/ProductCard/variants/ProductCard.jsx
// src/components/ui/cards/ProductCard/variants/SaleCard.jsx
"use client";
import { useState } from 'react';
import Image from 'next/image';

const SaleCard = ({ 
  salePercent = 50,
  originalPrice = "$29.99",
  tags = [], // ['sale', 'new', 'best', 'out']
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Конфигурация всех типов тегов
  const tagConfig = {
    sale: {
      bg: 'bg-[#EA4B48]',
      text: `${salePercent}% Sale`,
      width: 'w-[72px]',
    },
    new: {
      bg: 'bg-[#FF8A00]',
      text: 'New',
      width: 'w-[47px]',
    },
    best: {
      bg: 'bg-[#2388FF]',
      text: 'Best Sale',
      width: 'w-[80px]',
    },
    out: {
      bg: 'bg-[#1A1A1A]',
      text: 'Out of stock',
      width: 'w-[101px]',
    },
  };

  return (
    <div 
      className="w-[264px] h-[327px] bg-white border border-[#E5E5E5] relative transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Блок тегов в левом верхнем углу */}
      <div className="absolute left-2 top-2 z-10 flex flex-col gap-1">
        {tags.map((tagType) => (
          <div
            key={tagType}
            className={`${tagConfig[tagType].bg} ${tagConfig[tagType].width} h-[27px] rounded-[4px] px-2 flex items-center justify-center`}
          >
            <span className="text-white text-xs font-medium">
              {tagConfig[tagType].text}
            </span>
          </div>
        ))}
      </div>

      {/* Изображение продукта */}
      <div className="w-[264px] h-[240px] p-[5px] relative">
        <Image
          src="/images/products/green apple.svg"
          alt="Green Apple"
          width={264}
          height={240}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Информация о продукте */}
      <div className="absolute w-[264px] h-[87px] bottom-0 p-[12px]">
        <div className="w-[240px] h-[63px] flex flex-col gap-[6px]">
          <p className={`w-[240px] h-[21px] font-poppins font-normal text-[14px] leading-[150%] ${isHovered ? 'text-green-500' : 'text-[#4D4D4D]'}`}>
            Green Apple
          </p>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold">$14.99</span>
              <span className="text-[14px] text-gray-400 line-through">{originalPrice}</span>
            </div>
            <div className="w-[60px] h-[12px]">
              <Image
                src="/images/icons/rating.svg"
                alt="Rating"
                width={60}
                height={12}
              />
            </div>
          </div>
        </div>

        {/* Кнопка корзины */}
        <div className="absolute w-[40px] h-[40px] top-[23.5px] right-[12px]">
          <button className="w-full h-full flex items-center justify-center">
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
              <circle cx="20" cy="20.5" r="19.5" stroke="#E5E5E5" strokeWidth="1"/>
              <path 
                d="M16.6667 19.3333H14.1667L12.5 28.5H27.5L25.8333 19.3333H23.3333M16.6667 19.3333V16.8333C16.6667 14.9924 18.1591 13.5 20 13.5V13.5C21.8409 13.5 23.3333 14.9924 23.3333 16.8333V19.3333M16.6667 19.3333H23.3333M16.6667 19.3333V21.8333M23.3333 19.3333V21.8333" 
                stroke={isHovered ? "#4CAF50" : "#1A1A1A"}
                strokeWidth="1.3"
                className="transition-colors duration-300"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Иконки wishlist и quick view */}
      {isHovered && (
        <div className="absolute right-[12px] top-[12px] flex flex-col gap-2">
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <Image
              src="/images/icons/add to wishlist.svg"
              alt="Wishlist"
              width={40}
              height={40}
            />
          </button>
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <Image
              src="/images/icons/quick view.svg"
              alt="Quick View"
              width={40}
              height={40}
            />
          </button>
        </div>
      )}

      {/* Серый бордер при hover */}
      {isHovered && (
        <div className="absolute inset-0 border-2 border-gray-400 pointer-events-none"></div>
      )}
    </div>
  );
};

export default SaleCard;

// Использование:<SaleCard salePercent={30} originalPrice="$24.99" />