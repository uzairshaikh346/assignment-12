import React from 'react';
import Image from 'next/image';
import Logo from '@/app/images/Logo.png';

const Navbar = () => {
  return (
    <div className="h-[92px] w-[1920px] bg-[#043873] px-[220px] py-[16px] flex text-white justify-between items-center">
      <Image src={Logo} alt="logo" width={191} height={34} />
      <div className="flex items-center gap-[150px]">
        <ul className="flex gap-[32px]">
          <li className="hover:underline cursor-pointer">Product</li>
          <li className="hover:underline cursor-pointer">Solution</li>
          <li className="hover:underline cursor-pointer">Resource</li>
          <li className="hover:underline cursor-pointer">Prices</li>
        </ul>
        <button className="bg-[#FFE492] text-black px-[40px] py-[16px] rounded">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
