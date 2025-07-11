import React from 'react'
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
function page() {
  const big = useTranslations('TopProject');
  const small = useTranslations('SmallProject');
  return (
    <>
      <Header />
      <div className="w-screen">
        <h1 className="text-white font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-(--primary)">/</strong>{big('title')}
        </h1>
        <p className="font-(--font-regular)  text-[#abb2bf] text-[1.4rem] ml-[5%]">
          {big('paragraph')}
        </p>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 2xl:grid-cols-4 m-[2%] place-items-center md:grid-cols-2">
            {big.raw('project').map((item: { title:string,image:string,
            width:number,height:number, link:string, techstack:string,describe:string,button:string}) => (
               <div key={item.title}
               className="w-[300px]  h-full border-white border-[1px] rounded-[10px]
                cols-span-3 m-2"
               >
                <Image 
                src={item.image}
                width={item.width}
                height={item.height}
                alt={`${item.title}.png`}
                unoptimized={true}
                className=" m-[0px] rounded-t-[10px]"
                />        
               <hr className="w-[100%] h-[2px]  text-[#abb2bf]" />
          <p className="text-[#abb2bf] font-(--font-regular) text-start ml-[1%] text-[14px]">
            {item.techstack}
          </p>
          <hr className="w-[100%] h-[2px] mt-[4px] text-[#abb2bf]" />
          <div className="flex flex-col justify-center items-start gap-[0px] ml-[5%]">
            <h2 className="text-white font-(--font-bold) text-[22px] ">
              {item.title}
            </h2>
            <p className="text-[#abb2bf] font-(--font-regular)  text-[14px]">
              {item.describe}
            </p>
            <Link
              href={item.link}
              className="text-[#abb2bf] w-[100px] h-[3vh] text-center font-(--font-regular)  text-[12px]  border-[#c778dd] mt-[2%] border-[1px] rounded "
            >
              {item.button}
            </Link>
          </div>

               </div>  
            ))}
        </div>
        
      </div>
      {/* Short Projects */}
      <div className="w-screen">
        <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-[#c778dd]">#</strong>{small('title')}
        </h3>
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 2xl:grid-cols-4 m-[2%] place-items-center md:grid-cols-2 md:w-screen">
      {small.raw('projects').map((item:{name:string,techstack:string,describe:string,link:string,button:string}) => (
        <div
          key={item.name}
          className="w-[300px] h-[15vh] border-white border-[1px] rounded-[10px] "
        >
          <p className="text-[#abb2bf] font-(--font-regular) ml-[1%] text-[14px] text-center">
            {item.techstack}
          </p>
          <hr className="w-[100%] h-[2px] mt-[4px] text-[#abb2bf]" />
          <div className="flex flex-col justify-center items-start gap-[0px] ml-[5%]">
            <h2 className="text-white font-(--font-bold) text-[22px] ">
              {item.name}
            </h2>
            <p className="text-[#abb2bf] font-(--font-regular)  text-[14px]">
              {item.describe}
            </p>
            <Link
              href={item.link}
              className="text-[#abb2bf] w-[100px] h-[2vh]
               text-center font-(--font-regular)  text-[14px]  border-[#c778dd] mt-[2%] border-[1px] rounded "
            >
              {item.button}
            </Link>
          </div>
        </div>
      ))}
    </div>
      </div>

      <Footer />

    </>
  )
}

export default page
