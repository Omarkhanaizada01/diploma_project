'use client';
import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');

  return (
    <div className="relative w-full md:w-[536px]">
      <input
        type="email"
        placeholder="Your email address"
        className="w-full h-[52px] pl-6 pr-[120px] rounded-full border border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#00B207]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button 
        className="absolute right-1 top-1 h-[44px] px-6 bg-[#00B207] text-white font-semibold rounded-full hover:bg-[#038a05] transition-colors"
      >
        Subscribe
      </button>
    </div>
  );
}