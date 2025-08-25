// src/components/sections/Hero.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from '@/components/ui';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Hero Banner */}
        <div className="relative w-full h-[600px] rounded-[10px] overflow-hidden">
          {/* Image Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-black/0" />
          
          {/* Hero Image */}
          <Image
            src="/images/banners/leftHeroBanner.jpg"
            alt="Organic Food"
            fill
            className="object-cover"
            style={{
              borderRadius: '10px',
              objectPosition: '15% 70%',
            }}
            priority
          />
          
          {/* Hero Content */}
          <div className="relative z-20 p-12 text-white flex h-full items-center">
            {/* Green Accent Line */}
            <div className="h-[65px] w-[2px] bg-[#84D187] mr-6" />
            
            <div className="max-w-[596px]">
              {/* Main Title */}
              <h2 className="text-[48px] font-semibold leading-[120%] mb-16 text-white font-poppins">
                Fresh & Healthy<br />Organic Food
              </h2>
              
              {/* Sale Badge */}
              <div className="flex items-center gap-[10px] mb-1">
                <span className="text-[20px] leading-[150%] text-white font-poppins font-medium">
                  Sale up to
                </span>
                <div className="bg-[#FF8A00] rounded-[5px] px-[12px] py-[4px] w-[108px] h-[38px] flex items-center justify-center">
                  <span className="text-white text-[18px] font-medium">30% OFF</span>
                </div>
              </div>
              
              {/* Subtitle */}
              <p className="text-[14px] leading-[150%] text-white/80 font-poppins w-[215px]">
                Free shipping on all your order.
              </p>
              
              {/* CTA Button */}
              <ArrowButton variant="white" className="mt-6">
               Shop now
              </ArrowButton>
            </div>
          </div>
        </div>

        {/* Right Side Banners */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {/* First Right Banner */}
          <div className="relative w-[423px] h-[288px] rounded-[10px] overflow-hidden">
  {/* Изображение с поворотом -180deg */}
  <div className="absolute inset-0 rotate-[-180deg]">
    <Image
      src="/images/banners/rightHeroBanner1.jpg"
      alt="New Arrivals"
      fill
      className="object-cover"
      
    />
  </div>
  
  {/* Затемнение */}
  <div className="absolute inset-0 bg-black/40 z-10" />
  
  {/* Контент баннера */}
  <div className="absolute z-20 top-[32px] left-[32px] flex flex-col gap-[24px] w-[156px] h-[136px]">
    <h4 className="font-bold text-xl text-white">SUMMER SALE</h4>
    <p className="text-[#84D187] font-bold text-2xl">75% OFF</p>
    <p className="text-white/80">Only Fruit & Vegetable</p>
    
    {/* Кнопка с точными параметрами */}
    <div className="mt-2">
      <ArrowButton 
        variant="text-only"
        className="w-[108px] h-[19px] gap-[12px]"
        iconClassName="text-[12px] font-medium"
      >
        Shop Now
      </ArrowButton>
    </div>
  </div>
</div>
          
          {/* Second Right Banner */}
          <div className="relative w-full md:w-[423px] h-[288px] rounded-[10px] overflow-hidden">
            <Image
              src="/images/banners/rightHeroBanner2.jpg"
              alt="Limited Edition"
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 bg-[#002603CC] z-10" />
            
            <div className="relative z-20 p-6 h-full flex flex-col justify-center text-white">
              <h4 className="font-bold text-xl mb-2">BEST DEAL</h4>
              <p className="text-white/80 mb-2">Special Products</p>
              <p className="text-white font-bold text-xl mb-4">Deal of the Month</p>
              <ArrowButton variant="text-only">
               Shop Now
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}