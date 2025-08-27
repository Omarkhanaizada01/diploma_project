'use client';
import Image from 'next/image';

const socials = [
  { 
    name: 'Facebook', 
    icon: '/images/icons/facebook.svg', 
    active: true,
    defaultBg: 'bg-[#00B207]' // Зеленый фон всегда для Facebook
  },
  { 
    name: 'Twitter', 
    icon: '/images/icons/twitter.svg', 
    active: false 
  },
  { 
    name: 'Pinterest', 
    icon: '/images/icons/pinterest.svg', 
    active: true 
  },
  { 
    name: 'Instagram', 
    icon: '/images/icons/instagram (2).svg', 
    active: true 
  },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-2">
      {socials.map((social) => (
        <a 
          key={social.name}
          href="#"
          className={`
            w-10 h-10 rounded-full flex items-center justify-center
            ${social.defaultBg || 'bg-transparent'}
            ${social.active ? 'hover:bg-[#00B207]' : ''}
            transition-colors duration-200
          `}
        >
          <div className="relative w-[18px] h-[18px]">
            <Image 
              src={social.icon} 
              alt={social.name}
              width={18}
              height={18}
              style={{ width: '18px', height: 'auto' }}
              className="object-contain"
            />
          </div>
        </a>
      ))}
    </div>
  );
}