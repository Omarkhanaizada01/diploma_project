// components/sections/BannerSection.jsx
'use client';

import Banner from '@/components/ui/Banner';

const BannerSection = () => {
  const banners = [
    {
      id: 1,
      imageSrc: '/images/banners/banner 1.svg',
      topText: 'Best Deals',
      mainTitle: 'Sale of the Month',
      buttonText: 'Shop now',
      timer: {
        days: 2,
        hours: 10,
        mins: 30,
        secs: 45
      }
    },
    {
      id: 2,
      imageSrc: '/images/banners/banner 2.svg',
      topText: '85% Fat free',
      mainTitle: 'Low-Fat Meat',
      price: 'Started at $79.99'
    },
    {
      id: 3,
      imageSrc: '/images/banners/banner 3.svg',
      topText: 'Summer Sale',
      mainTitle: '100% Fresh Fruit',
      discount: 64
    }
  ];

  return (
    <section className="py-10 bg-white relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6"> {/* 24px gap между баннерами */}
          {banners.map((banner) => (
            <Banner
              key={banner.id}
              imageSrc={banner.imageSrc}
              topText={banner.topText}
              mainTitle={banner.mainTitle}
              buttonText={banner.buttonText}
              timer={banner.timer}
              price={banner.price}
              discount={banner.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;