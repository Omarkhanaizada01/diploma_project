// components/sections/HotDeals.js
'use client';
import Heading from '@/components/ui/headings/Heading';
import BigProductCard from '@/components/ui/cards/BigProductCard/BigProductCard';
import ProductCard from '@/components/ui/cards/ProductCard/ProductCard';

const HotDeals = () => {
  const bigProduct = {
    id: 1,
    image: '/images/products/green apple.svg',
    title: 'Green Apple',
    price: 14.99,
    originalPrice: 29.99,
    rating: 4,
    hoverVariant: 'green'
  };

  const products = [
    {
      id: 2,
      image: '/images/products/orange.svg',
      title: 'Fresh Orange',
      price: 18.99,
      originalPrice: 24.99,
      rating: 5,
      hoverVariant: 'gray'
    },
    {
      id: 3,
      image: '/images/products/banana.svg',
      title: 'Banana',
      price: 12.99,
      originalPrice: 15.99,
      rating: 3,
      hoverVariant: 'yellow'
    },
    {
      id: 4,
      image: '/images/products/strawberry.svg',
      title: 'Strawberry',
      price: 22.99,
      originalPrice: 29.99,
      rating: 5,
      hoverVariant: 'red'
    },
    {
      id: 5,
      image: '/images/products/grape.svg',
      title: 'Grape',
      price: 16.99,
      originalPrice: 19.99,
      rating: 4,
      hoverVariant: 'purple'
    },
    {
      id: 6,
      image: '/images/products/watermelon.svg',
      title: 'Watermelon',
      price: 24.99,
      originalPrice: 32.99,
      rating: 4,
      hoverVariant: 'green'
    },
    {
      id: 7,
      image: '/images/products/kiwi.svg',
      title: 'Kiwi',
      price: 19.99,
      originalPrice: 24.99,
      rating: 4,
      hoverVariant: 'green'
    }
  ];

  const bottomProducts = [
    {
      id: 8,
      image: '/images/products/pear.svg',
      title: 'Pear',
      price: 15.99,
      originalPrice: 18.99,
      rating: 3,
      hoverVariant: 'green'
    },
    {
      id: 9,
      image: '/images/products/peach.svg',
      title: 'Peach',
      price: 17.99,
      originalPrice: 21.99,
      rating: 4,
      hoverVariant: 'orange'
    },
    {
      id: 10,
      image: '/images/products/mango.svg',
      title: 'Mango',
      price: 23.99,
      originalPrice: 28.99,
      rating: 5,
      hoverVariant: 'yellow'
    },
    {
      id: 11,
      image: '/images/products/pineapple.svg',
      title: 'Pineapple',
      price: 26.99,
      originalPrice: 32.99,
      rating: 4,
      hoverVariant: 'yellow'
    },
    {
      id: 12,
      image: '/images/products/cherry.svg',
      title: 'Cherry',
      price: 20.99,
      originalPrice: 25.99,
      rating: 5,
      hoverVariant: 'red'
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <Heading 
          title="Hot Deals" 
          subtitle="Don't miss out on these limited time offers"
          buttonText="View All"
          className="mb-8"
        />

        {/* Основной контент */}
        <div className="flex flex-col lg:flex-row  mb-10">
          {/* Большая карточка слева */}
          <div className="lg:w-[528px]">
            <BigProductCard 
              image={bigProduct.image}
              title={bigProduct.title}
              price={bigProduct.price}
              originalPrice={bigProduct.originalPrice}
              rating={bigProduct.rating}
              hoverVariant={bigProduct.hoverVariant}
            />
          </div>

          {/* Две колонки с карточками справа */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 ">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                hoverVariant={product.hoverVariant}
              />
            ))}
          </div>
        </div>

        {/* Горизонтальные карточки внизу */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          {bottomProducts.map(product => (
            <ProductCard 
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              hoverVariant={product.hoverVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;