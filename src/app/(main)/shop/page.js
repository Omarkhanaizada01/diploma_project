'use client';
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ShopTopBar from './ShopTopBar'; 
import CategoriesList from './ShopFilters/CategoriesList';
import { ProductCard4x } from '@/components/ui/cards/ProductCard/ProductCard';

export default function ShopPage() {
  const products = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `$${(19.99 + index).toFixed(2)}`,
    oldPrice: `$${(29.99 + index).toFixed(2)}`,
    image: "/images/products/green apple.svg"
  }));

  return (
    <>
      <Breadcrumbs 
        paths={[
          { name: "Home", icon: "/images/icons/home.svg" },
          { name: "Categories" },
          { name: "Vegetables" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <ShopTopBar />
        
        <div className="flex gap-8 mt-8">
          <aside className="w-[312px] flex-shrink-0">
            <CategoriesList />
          </aside>
          
          <main className="flex-1">
            <div className="bg-white p-6 rounded-lg">
              {/* Сетка 3 столбца с отступами 24px */}
              <div className="grid grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard4x
                    key={product.id}
                    product={product}
                    showWishlist={true}
                    showQuickView={true}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}