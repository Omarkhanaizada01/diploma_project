'use client';
import Image from 'next/image';
import ArrowButton from '@/components/ui/buttons/ArrowButton';
import Heading from '@/components/ui/headings/Heading';

const LatestNews = () => {
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
      title: 'Curabitur porttitor orci eget neque accumsan venenatis.'
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
      title: 'Eget lobortis lorem lacinia. Vivamus pharetra semper.'
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
      title: 'Maecenas blandit risus elementum mauris malesuada.'
    }
  ];

  return (
    <section className="bg-white relative mt-[-320px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading 
          title="Latest News" 
          buttonText="View All"
          className="mb-8"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="relative flex-shrink-0 w-[300px] sm:w-[350px] md:w-[424px] rounded-lg overflow-hidden bg-white transition hover:shadow-xl hover:-translate-y-1"
              style={{
                boxShadow: '0px 20px 50px 0px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Изображение */}
              <div className="relative w-full h-[240px] sm:h-[280px] md:h-[324px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                
                {/* Дата */}
                <div 
                  className="absolute bottom-4 left-4 w-[58px] h-[58px] bg-white rounded flex flex-col items-center justify-center shadow-md"
                >
                  <span className="font-bold text-xl text-[#1A1A1A]">{post.date}</span>
                  <span className="text-xs text-[#4D4D4D]">{post.month}</span>
                </div>
              </div>
              
              {/* Информация */}
              <div className="w-full p-6 flex flex-col gap-4">
                {/* Теги */}
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <div key={tag.text} className="flex items-center gap-1">
                      <Image 
                        src={tag.icon} 
                        alt={tag.text} 
                        width={14} 
                        height={14} 
                      />
                      <span className="text-sm text-[#4D4D4D] font-normal">
                        {tag.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Заголовок */}
                <h3 className="text-lg font-medium text-[#1A1A1A] leading-snug">
                  {post.title}
                </h3>
                
                {/* Кнопка */}
                <ArrowButton 
                  variant="text-only"
                  className="w-[108px] h-[19px] gap-[12px]"
                  iconClassName="text-[12px] font-medium"
                >
                  Read More
                </ArrowButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
