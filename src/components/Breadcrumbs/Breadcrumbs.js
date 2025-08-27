import Image from "next/image";
import LocationPath from "./LocationPath";

export default function Breadcrumbs() {
  return (
    <div 
      className="relative w-full h-[120px]"
      style={{
        background: "linear-gradient(90.02deg, rgba(0, 0, 0, 0.7) 0.03%, rgba(0, 0, 0, 0) 91.31%)",
      }}
    >
      {/* Фоновое изображение */}
      <Image 
        src="/images/breadcrumbs.jpg" 
        alt="Background"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        className="object-cover -z-10"
      />
      
      {/* Контейнер с тем же отступом, что и Navigation */}
      <div className="container mx-auto px-4 h-full">
        <div className="relative h-full flex items-center">
          <LocationPath currentPage="Vegetables" />
        </div>
      </div>
    </div>
  );
}