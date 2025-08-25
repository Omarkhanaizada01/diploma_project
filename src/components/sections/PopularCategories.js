// src/components/sections/PopularCategories.js
"use client";

import { Heading } from '@/components/ui';

const PopularCategories = () => {
  // Массив данных категорий с путями к изображениям
  const categories = [
    { 
      id: 1, 
      name: "Fresh Fruit", 
      image: "/images/categories/fruits category.svg" 
    },
    { 
      id: 2, 
      name: "Fresh Vegetables", 
      image: "/images/categories/vegetables category.svg" 
    },
    { 
      id: 3, 
      name: "Meat & Fish", 
      image: "/images/categories/meat category.svg" 
    },
    { 
      id: 4, 
      name: "Snacks", 
      image: "/images/categories/snacks category.svg" 
    },
    { 
      id: 5, 
      name: "Beverages", 
      image: "/images/categories/beverages category.svg" 
    },
    { 
      id: 6, 
      name: "Beauty & Health", 
      image: "/images/categories/beauty category.svg" 
    },
    { 
      id: 7, 
      name: "Bread & Bakery", 
      image: "/images/categories/bread category.svg" 
    },
    { 
      id: 8, 
      name: "Baking Needs", 
      image: "/images/categories/baking category.svg" 
    },
    { 
      id: 9, 
      name: "Cooking", 
      image: "/images/categories/cooking category.svg" 
    },
    { 
      id: 10, 
      name: "Diabetic Food", 
      image: "/images/categories/diabetic category.svg" 
    },
    { 
      id: 11, 
      name: "Dish Detergents", 
      image: "/images/categories/dish category.svg" 
    },
    { 
      id: 12, 
      name: "Oil", 
      image: "/images/categories/oil category.svg" 
    },
    
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1320px] mx-auto">
        <Heading 
          title="Popular Categories" 
          buttonText="View All"
          className="mb-8 px-4 sm:px-6 lg:px-8"
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="w-[200px] h-[213px] flex flex-col items-center pt-4 pb-6 gap-4 bg-white border border-[#E5E5E5] rounded-[5px] hover:border-green-500 transition-colors cursor-pointer"
            >
              {/* Изображение категории */}
              <div className="w-[190px] h-[130px] overflow-hidden flex items-center justify-center">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                  width={190}
                  height={130}
                />
              </div>
              
              <h3 className="text-center font-medium text-[#1A1A1A]">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;