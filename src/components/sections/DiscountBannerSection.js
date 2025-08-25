'use client';
import Image from 'next/image';
import ArrowButton from '@/components/ui/buttons/ArrowButton';

const DiscountBannerSection = () => {
  return (
    <section className="py-10 bg-white relative ">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div 
            className="relative rounded-[10px] overflow-hidden"
            style={{
              width: '1320px',
              height: '358px',
              opacity: 1
            }}
          >
            <Image
              src="/images/banners/discount banner.jpg"
              alt="Summer Sale 37% Off"
              fill
              className="object-cover"
              priority
            />
            
            {/* Основной контент баннера (справа) */}
            <div 
              className="absolute z-20 top-[60px] right-[51px] flex flex-col gap-4"
              style={{
                width: '441px',
                height: '159px'
              }}
            >
              {/* "SUMMER SALE" заголовок */}
              <h4 
                className="text-white uppercase"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '2%'
                }}
              >
                SUMMER SALE
              </h4>
              
              {/* "37% OFF" с разными цветами */}
              <div className="flex items-baseline">
                <span 
                  className="text-[#FFA500]" // Оранжевый цвет для 37%
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '56px',
                    lineHeight: '120%',
                    letterSpacing: '0%'
                  }}
                >
                  37%
                </span>
                <span 
                  className="text-white" // Белый цвет для OFF
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '56px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    marginLeft: '8px' // Небольшой отступ между 37% и OFF
                  }}
                >
                  OFF
                </span>
              </div>
              
              {/* Описание с переносом строки */}
              <p 
                className="text-white/80"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '120%'
                }}
              >
                Free on all your order, Free Shipping and 30 days<br />money-back guarantee
              </p>
              
              {/* Кнопка Shop Now */}
              <div className="mt-2">
                <ArrowButton 
                  variant="green"
                  className="w-[108px] h-[19px] gap-[12px]"
                  iconClassName="text-[12px] font-medium"
                >
                  Shop Now
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBannerSection;