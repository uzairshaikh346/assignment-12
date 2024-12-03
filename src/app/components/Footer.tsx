import React from 'react'
import Image from 'next/image';
import Logo from '@/app/images/Logo.png';


function Footer() {
  return (
    <div>
       <div className='bg-[#043873] h-[460px] w-[1920px] py-[140px] px-[220px]'>

<ul className='text-[#FFFFFF] flex gap-[100px]'>
    <li className='w-[295px] flex flex-col gap-5 text-[18px] leading-[30px] font-normal'>
        <Image src={Logo} alt='logo'/>
        <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
    </li>
    <li className='w-[295px] flex flex-col gap-5 text-[18px] leading-[30px] font-normal'>
        <p className='font-bold'>Product</p>
        <p>Overview</p>
        <p>Prices</p>
        <p>Customer Stories</p>
    </li>
    <li className='w-[295px] flex flex-col gap-5 text-[18px] leading-[30px] font-normal'>
        <p className='font-bold'>Resoures</p>
        <p>Blog</p>
        <p>Guid and Tutorial</p>
        <p>Help center</p>
    </li>
    <li className='w-[295px] flex flex-col gap-5 text-[18px] leading-[30px] font-normal'>
        <p className='font-bold'>Company</p>
        <p>About us</p>
        <p>Career</p>
        <p>Media Kit</p>
    </li>
</ul>

</div>
    </div>
  )
}

export default Footer
