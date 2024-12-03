import React from 'react'
import Image from 'next/image'
import workImage from '@/app/images/Work Together Image.png'
import sponsors from '@/app/images/sponsors.png'


function HeroSection() {
    return (
        <div>

            <div className='bg-[#043873] py-[140px] px-[220px] flex text-white gap-5 w-[1920px]'>
                <div className='py-16'>
                    <h2 className='text-[64px] font-bold'>Get More Done With <br /> Whitespace</h2>
                    <p className='text-[18px] font-normal'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>

                    <button className='bg-[#4F9CF9] rounded-[8px] py-[20px] px-[30px] mt-10'>Try Whitespace free -</button>
                </div>
                <div className='bg-[#C4DEFD] w-[824px] h-[549px]'></div>
            </div>



            <div className='bg-white text-black py-[140px] px-[220px] gap-[100px]'>
                <div className='flex gap-6'>
                    <div className='w-[672px]'>
                        <h3 className='text-[72px] font-bold'>Project <br /> Management</h3>
                        <p className='text-[18px] mt-8'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                        <button className='bg-[#4F9CF9] text-white rounded-[8px] py-[15px] px-[40px] mt-10'>Get start -</button>

                    </div>
                    <div className='bg-[#C4DEFD] h-[547px] w-[748px]'></div>
                </div>

                <div className='flex gap-[100px] mt-[100px]'>
                    <div>
                        <Image src={workImage} alt='symbol' />
                    </div>
                    <div>
                        <div className='w-[672px] mt-[100px]'>
                            <h3 className='text-[72px] font-bold'>Work Together</h3>
                            <p className='text-[18px]'>With whitepace, share your notes with your colleagues and collaborate on them.
                                You can also publish a note to the internet and share the URL with others.
                            </p>
                            <button className='bg-[#4F9CF9] text-white rounded-[8px] py-[15px] px-[40px] mt-10'>Try it now -</button>

                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-[#043873] w-[1920px] h-[574px] py-[140px] px-[220px] text-white flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[72px] font-bold text-center'>Your work, everywhere you are</h1>
                <p className='font-normal text-[18px] text-center w-[1100px] text-[#FFFFFF] mt-3'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                <button className='bg-[#4F9CF9] text-white w-[195px] rounded-[8px] py-[15px] px-[40px] mt-16'>Try it now -</button>

                </div>
            </div>


            <div className='h-[538px] w-[1920px] py-[140px] px-[220px] gap-[100px]'>
                <h1 className='font-bold text-[72px] text-center'>Our sponsors</h1>
                <Image className='mt-[100px]' src={sponsors} alt='sponsors'/>

            </div>
        </div>
    )
}

export default HeroSection
