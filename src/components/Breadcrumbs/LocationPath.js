import Link from 'next/link';
import Image from 'next/image';

export default function LocationPath({ currentPage }) {
  const paths = [
    { 
      id: 'home',
      type: 'icon', 
      content: '/images/icons/home.svg',
      link: '/',
      alt: 'Home'
    },
    { 
      id: 'categories',
      type: 'text', 
      content: 'Categories',
      link: '/categories'
    },
    { 
      id: 'current',
      type: 'text', 
      content: currentPage
    }
  ];

  return (
    <div className="container mx-auto px-4 h-full flex items-center">
      <div className="flex items-center gap-[12px]">
        {paths.map((item, index) => (
          <div key={item.id} className="flex items-center gap-[12px]">
            {/* Иконка Home */}
            {item.type === 'icon' && (
              <Link href={item.link} passHref>
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                  <Image 
                    src={item.content}
                    alt={item.alt}
                    width={24}
                    height={24}
                    style={{ width: '24px', height: 'auto' }}
                  />
                </div>
              </Link>
            )}

            {/* Текст (Categories или текущая страница) */}
            {item.type === 'text' && (
              <>
                {item.link ? (
                  <Link href={item.link} passHref>
                    <span className={`
                      text-[16px] font-poppins 
                      ${item.content === currentPage ? 'text-[#00B207]' : 'text-[#999999]'}
                      cursor-pointer hover:opacity-80 transition-opacity
                    `}>
                      {item.content}
                    </span>
                  </Link>
                ) : (
                  <span className="text-[16px] font-poppins text-[#00B207]">
                    {item.content}
                  </span>
                )}
              </>
            )}

            {/* Разделитель */}
            {index < paths.length - 1 && (
              <Image 
                src="/images/icons/vectorRight.svg" 
                alt="separator"
                width={8.17}
                height={4.08}
                style={{
                  width: '8.17px',
                  height: 'auto',
                  transform: 'rotate(0deg)',
                  opacity: 1
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}