// src/components/ui/cards/ProductCard/ProductCard.jsx
// src/components/ui/cards/ProductCard/ProductCard.jsx
"use client";
import Image from 'next/image';
import { useState } from 'react';

// Базовый компонент карточки
const BaseProductCard = ({ 
  size = '5n', // '5n' | '4x' | '5x'
  showWishlist = true, 
  showQuickView = true,
  product = {
    name: "Green Apple",
    price: "$14.99",
    oldPrice: "$24.99",
    image: "/images/products/green apple.svg"
  }
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Размеры для разных вариантов
  const sizes = {
    '5n': {
      card: "w-[264px] h-[327px]",
      image: "w-[264px] h-[240px] p-[5px]",
      info: "w-[264px] h-[87px] p-[12px]",
      content: "w-[240px] h-[63px]"
    },
    '4x': {
      card: "w-[312px] h-[407px] rounded-[8px]",
      image: "w-[312px] h-[312px] p-[5px] gap-[10px]",
      info: "w-[312px] h-[95px] p-[16px] gap-[6px]",
      content: "w-full h-full"
    },
    '5x': {
      card: "w-[248px] h-[339px] rounded-[8px]",
      image: "w-[248px] h-[248px] p-[1px]",
      info: "w-[248px] h-[91px] pt-[12px] pr-[16px] pb-[16px] pl-[16px] gap-[6px]",
      content: "w-full h-full"
    }
  };

  const currentSize = sizes[size];

  return (
    <div 
      className={`bg-white border border-[#E5E5E5] relative transition-all duration-300 ${currentSize.card} ${
        isHovered ? 'border-[#00B207] shadow-[0px_0px_12px_0px_#20B52652]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Изображение продукта */}
      <div className={currentSize.image}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Информация о продукте */}
      <div className={`absolute bottom-0 ${currentSize.info}`}>
        <div className={`flex flex-col gap-[6px] ${currentSize.content}`}>
          <p className={`font-poppins font-normal text-[14px] leading-[150%] ${
            isHovered ? 'text-green-500' : 'text-[#4D4D4D]'
          }`}>
            {product.name}
          </p>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold">{product.price}</span>
              <span className="text-[14px] text-[#999999] line-through">{product.oldPrice}</span>
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

        {/* Кнопка корзины (всегда видима) */}
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

      {/* Иконки wishlist и quick view (появляются при hover) */}
      {isHovered && (
        <div className="absolute right-[12px] top-[12px] flex flex-col gap-2">
          {showWishlist && (
            <button className="w-[40px] h-[40px] flex items-center justify-center">
              <Image
                src="/images/icons/add to wishlist.svg"
                alt="Wishlist"
                width={40}
                height={40}
              />
            </button>
          )}
          
          {showQuickView && (
            <button className="w-[40px] h-[40px] flex items-center justify-center">
              <Image
                src="/images/icons/quick view.svg"
                alt="Quick View"
                width={40}
                height={40}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// Экспортируем отдельные компоненты для каждого размера
export const ProductCard5n = (props) => <BaseProductCard size="5n" {...props} />;
export const ProductCard4x = (props) => <BaseProductCard size="4x" {...props} />;
export const ProductCard5x = (props) => <BaseProductCard size="5x" {...props} />;

// Экспортируем по умолчанию основной вариант
export default ProductCard5n;