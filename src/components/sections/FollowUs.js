import React from "react";
import Image from "next/image";

const FollowUs = () => {
  // Массив постов из Instagram
  const instagramPosts = [
    { id: 1, name: "instagramPost 1.svg" },
    { id: 2, name: "instagramPost 2.jpg" },
    { id: 3, name: "instagramPost 3.svg" },
    { id: 4, name: "instagramPost 4.svg" },
    { id: 5, name: "instagramPost 5.svg" },
    { id: 6, name: "instagramPost 6.svg" },
  ];

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Заголовок */}
        <h2 
          className="w-full max-w-[378px] text-center mb-12 font-poppins font-semibold text-[32px] leading-[1.2] text-[#1A1A1A]"
        >
          Follow us on Instagram
        </h2>

        {/* Галерея постов */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              className="relative group cursor-pointer w-full max-w-[200px] aspect-square overflow-hidden"
            >
              {/* Пост Instagram */}
              <Image
                src={`/images/followUs/${post.name}`}
                alt={`Instagram Post ${post.id}`}
                width={200}
                height={200}
                style={{ width: '100%', height: 'auto' }}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />

              {/* Эффект при наведении */}
              <div className="absolute inset-0 bg-[#2B572ECC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* Иконка Instagram */}
                <Image
                  src="/images/icons/instagram.svg"
                  alt="Instagram Icon"
                  width={32}
                  height={32}
                  style={{ width: '32px', height: 'auto' }}
                  className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;