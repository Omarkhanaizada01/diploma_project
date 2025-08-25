'use client';
import { useState } from 'react';
import SectionHeading from '../SectionHeading'; 
import PriceFilter from './PriceFilter'; 
import RatingFilter from './RatingFilter';
import PopularTags from './PopularTags';
import ShopBanner from './ShopBanner';
import SaleProducts from './SaleProducts'

const categories = [
  { id: 1, name: "Fresh Fruit", count: 25, checked: false },
  { id: 2, name: "Vegetables", count: 134, checked: true },
  { id: 3, name: "Cooking", count: 67, checked: false },
  { id: 4, name: "Snacks", count: 89, checked: false },
  { id: 5, name: "Beverages", count: 42, checked: false },
  { id: 6, name: "Beauty & Health", count: 56, checked: false },
  { id: 7, name: "Bread & Bakery", count: 78, checked: false }
];

export default function CategoriesList() {
  const [selectedCategory, setSelectedCategory] = useState(2);

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className="w-[312px] opacity-100">
      {/* SectionHeading компонент */}
      <SectionHeading />
      
      {/* Список категорий */}
      <div className="space-y-[10px] mt-4">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="flex items-center gap-[10px] cursor-pointer group py-1"
            onClick={() => handleCategoryChange(category.id)}
          >
            {/* Кастомная радио-кнопка */}
            <div className="relative">
              <input
                type="radio"
                id={`category-${category.id}`}
                name="category"
                checked={selectedCategory === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="absolute opacity-0 w-0 h-0"
              />
              
              <div className={`
                w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                ${selectedCategory === category.id 
                  ? 'border-[#00B207] bg-white'
                  : 'border-[#CCCCCC] bg-white group-hover:border-[#00B207]'
                }
              `}>
                {selectedCategory === category.id && (
                  <div className="w-3 h-3 bg-[#00B207] rounded-full"></div>
                )}
              </div>
            </div>

            {/* Название категории и количество */}
            <label 
              htmlFor={`category-${category.id}`}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span className="text-[#1A1A1A] font-poppins text-sm leading-[150%]">
                {category.name}
              </span>
              <span className="text-[#808080] font-poppins text-sm leading-[150%]">
                ({category.count})
              </span>
            </label>
          </div>
        ))}
      </div>

      {/* Разделительная линия */}
      <div className="w-full h-px bg-[#E6E6E6] my-6"></div>
      
      {/* Компонент фильтра по цене */}
      <PriceFilter />
      <RatingFilter />
      <PopularTags />
      <ShopBanner />
      <SaleProducts />
    </div>
  );
}