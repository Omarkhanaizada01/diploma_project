// src/app/(main)/shop/ShopFilters/SectionHeading.js
// src/app/(main)/shop/ShopFilters/SectionHeading.js
import Image from 'next/image';
export default function SectionHeading({ title = "All Categories", showIcon = true }) {
  return (
    <div className="flex justify-between items-center pb-5 w-[312px] h-[30px] mb-5">
      {/* Динамический заголовок */}
      <h2 className="text-[#1A1A1A] font-poppins font-medium text-[20px] leading-[150%]">
        {title}
      </h2>

      {/* Иконка ChevronDown - только если showIcon=true */}
      {showIcon && (
        <div className="relative w-[12px] h-[6px]">
          <Image
            src="/ChevronDown.png"
            alt="Dropdown"
            width={12}
            height={6}
            style={{
              border: '0px solid #1A1A1A',
              opacity: 1,
              transform: 'rotate(180deg)'
            }}
          />
        </div>
      )}
    </div>
  );
}