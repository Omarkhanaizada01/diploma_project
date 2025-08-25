'use client';
import Image from 'next/image';
import ArrowButton from '@/components/ui/buttons/ArrowButton';


const LatestNews = () => {
  // Данные для карточек блога
  const blogPosts = [
    {
      id: 1,
      image: '/images/news/news 1.svg',
      date: '28',
      month: 'October',
      tags: [
        { icon: '/images/icons/food tag.svg', text: 'Food' },
        { icon: '/images/icons/user tag.svg', text: 'By Admin' },
        { icon: '/images/icons/comments tag.svg', text: '65 Comments' }
      ],
      title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
      hover: true
    },
    {
      id: 2,
      image: '/images/news/news 2.svg',
      date: '15',
      month: 'November',
      tags: [
        { icon: '/images/icons/food tag.svg', text: 'Recipes' },
        { icon: '/images/icons/user tag.svg', text: 'By Admin' },
        { icon: '/images/icons/comments tag.svg', text: '65 Comments' }
      ],
      title: 'Eget lobortis lorem lacinia. Vivamus pharetra semper.',
      hover: false
    },
    {
      id: 3,
      image: '/images/news/news 3.svg',
      date: '03',
      month: 'December',
      tags: [
        { icon: '/images/icons/food tag.svg', text: 'Healthy' },
        { icon: '/images/icons/user tag.svg', text: 'By Admin' },
        { icon: '/images/icons/comments tag.svg', text: '65 Comments' }
      ],
      title: 'Maecenas blandit risus elementum mauris malesuada.',
      hover: false
    }
  ];

  return (
    <section className="py-10 bg-white relative mt-[-360px]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">
            Latest News
          </h2>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className={`relative w-[424px] h-[494px] rounded-lg overflow-hidden ${post.hover ? 'hover:shadow-lg' : ''}`}
              style={{
                boxShadow: '0px 20px 50px 0px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Изображение */}
              <div className="relative w-[424px] h-[324px]">
                <Image
                  src={post.image}
                  alt={`Blog post ${post.id}`}
                  fill
                  className="object-cover"
                />
                
                {/* Дата */}
                <div 
                  className="absolute top-[242px] left-[24px] w-[58px] h-[58px] bg-white rounded flex flex-col items-center justify-center"
                  style={{
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span className="font-bold text-xl text-[#1A1A1A]">{post.date}</span>
                  <span className="text-xs text-[#4D4D4D]">{post.month}</span>
                </div>
              </div>
              
              {/* Информация */}
              <div className="w-full h-[170px] bg-white p-6 flex flex-col gap-5 ">
                {/* Теги */}
                <div className="flex gap-4">
                  {post.tags.map((tag, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <Image 
                        src={tag.icon} 
                        alt={tag.text} 
                        width={14} 
                        height={14} 
                      />
                      <span 
                        className="text-sm text-[#4D4D4D]"
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 400,
                          lineHeight: '150%'
                        }}
                      >
                        {tag.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Заголовок */}
                <h3 
                  className="text-lg font-medium text-[#1A1A1A] mt-[-16px]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    lineHeight: '150%'
                  }}
                >
                  {post.title}
                </h3>
                
                {/* Кнопка */}
                <div className="mt-[-10px]">
                  <ArrowButton 
                    variant="text-only"
                    className="w-[108px] h-[19px] gap-[12px]"
                    iconClassName="text-[12px] font-medium"
                  >
                    Read More
                  </ArrowButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;