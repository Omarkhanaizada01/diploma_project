// src/components/sections/PopularProducts/PopularProducts.js
'use client';

import Image from 'next/image';
import ProductCard from '@/components/ui/cards/ProductCard/ProductCard';
import SaleCard from '@/components/ui/cards/ProductCard/variants/SaleCard';
import HoverCard from '@/components/ui/cards/ProductCard/variants/HoverCard';
import Heading from '@/components/ui/headings/Heading';

const AddToCartIcon = ({ className }) => (
  <Image 
    src="/images/icons/add to cart.svg" 
    alt="Add to cart" 
    width={24}
    height={24}
    style={{width:'24px', height:'auto'}}
    className={className}
  />
);

const AddToWishlistIcon = ({ className }) => (
  <Image 
    src="/images/icons/add to wishlist.svg" 
    alt="Add to wishlist" 
    width={24}
    height={24}
    style={{width:'24px', height:'auto'}}
    className={className}
  />
);

const QuickViewIcon = ({ className }) => (
  <Image 
    src="/images/icons/quick view.svg" 
    alt="Quick view" 
    width={24}
    height={24}
    style={{width:'24px', height:'auto'}}
    className={className}
  />
);

const RatingIcon = ({ className }) => (
  <Image 
    src="/images/icons/rating.svg" 
    alt="Rating" 
    width={24}
    height={24}
    style={{width:'24px', height:'auto'}}
    className={className}
  />
);

const sampleProduct = {
  image: '/images/products/green apple.svg',
  title: 'Green Apple',
  price: 14.99,
  rating: 4,
  originalPrice: 29.99
};

const FeaturedProductsSection = () => {
  // Создаем массив из 10 продуктов
  const products = Array(5).fill({ ...sampleProduct });

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading 
          title="Featured Products" 
          buttonText="View All"
          className="mb-8"
        />
        
        {/* Контейнер для карточек */}
        <div className="w-full" style={{ height: '714px' }}>
          {/* Верхний ряд - 5 карточек */}
          <div className="flex" style={{ gap: 0 }}>
            {products.slice(0, 5).map((product, index) => (
              <div key={`top-${index}`} className="w-1/5">
                {index === 0 ? ( // Первая карточка - SaleCard
                 <SaleCard tags={['sale']} salePercent={50} />
                ) : (
                  <ProductCard 
                    {...product}
                    CartIcon={AddToCartIcon}
                    WishlistIcon={AddToWishlistIcon}
                    RatingIcon={RatingIcon}
                  />
                )}
              </div>
            ))}
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;