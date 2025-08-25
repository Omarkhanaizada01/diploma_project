// src/components/ui/cards/ProductCard/variants/HoverCard.jsx
"use client";
import { useState } from 'react';
import ProductCard from '../ProductCard';

const HoverCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProductCard
        isHovered={isHovered}
        showWishlist
        showQuickView
        {...props}
      />
    </div>
  );
};

export default HoverCard;