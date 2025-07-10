'use client'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeroComponent from "../Components/HeroComponent";
import Project from "../Components/Project";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Email from '../../../public/svg/Email.svg';
import Animedev from '../../../public/Animedev.png'
import vectorset from '../../../public/svg/vectorset.svg'
export default function HomePage(){
  const con = useTranslations('Contact');
  const about = useTranslations('AboutMe');
  const trans = useTranslations('Skills');

  return (
    <>
    <Header />
    <HeroComponent />
    <Project />
    {/* Skills */}
    <div>
              <div className="flex justify-center items-between gap-[20px]">
                <div className="flex flex-[2] items-center ml-[5%]">
                  <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px]">
                    <strong className="text-[#c778dd]">#</strong> {trans('title')}
                  </h3>
                  <hr className="w-[40%] h-[2px] bg-[#c778dd] " />
                </div>
    
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 m-[5%] gap-2">
                <div className="hidden md:block xl:block xl:ml-[5%] 2xl:block 2xl:ml-[10%] cols-span-3">
                <Image src={vectorset} alt="vectors" />
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1 gap-4  place-items-center p-4">
                    {trans.raw('skill').map((item: { name: string; lang:string  }) => (
                    <div key={item.name} className="flex flex-col justify-start items-center border-white rounded border-[2px] p-2 w-[178px] h-[103px]">
                        <h4
                        className="font-(--font-bold) text-white text-[22px]"
                        >{item.name}</h4>
                        <hr className="w-[178px] h-1 text-white " />
                        <p className="font-(--font-regular)  text-[#abb2bf] text-[14px]">{item.lang}</p>
                    </div>
                    ))}
                </div>
               <div>
               </div>
              </div>
            </div>
    {/*About me */}
    <div>
          <div className="flex items-center ml-[5%] ">
            <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px]">
              <strong className="text-[#c778dd]">#</strong>{about('title')}
            </h3>
            <hr className="w-[40%] h-[2px] bg-[#c778dd] " />
          </div>

          <div className="grid  grid-cols-1 xl:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 
          sm:gap-4 gap-6 m-[1%] place-items-center sm:m-[2%]">
           <div className="flex flex-col justify-center item-center gap-[20px] cols-span-6 w-[90%] h-[400px] m-10 md:m-[1%] xl:m-4 2xl:m-4">
                {
            about.raw('describe').map((item:string) => (
               <p key={item}
               className="font-(--font-regular)  text-[#abb2bf] text-[20px] place-items-center">
                {item}
              </p>
            ))
           
           }
          
              <Link href="/about">
                <button className="w-[220px] h-[50px]  border-[#c778dd] border-[1px]
                 p-[2%] text-white font-(--font-regular) text-[16px] ">
                 {about('link')} &rarr;
                </button>
              </Link>
            </div>
           

            <Image
              src={Animedev}
              unoptimized={true}
              alt="animedev"
              width={257}
              height={286}
              priority
              className="w-[257] h-[286px] xl:w-[457px] xl:h-[386px] "
            />
          </div>

  </div>

    {/* Contact me */}
    <div className="flex justify-center items-between gap-[20px]   ">
            <div className="flex flex-[2]  items-center ml-[5%] ">
              <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px]">
                <strong className="text-[#c778dd]">#</strong> {con('title')}
              </h3>
              <hr className="w-[40%] h-[2px] bg-[#c778dd] " />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 justify-center items-center xl:grid-cols-2 2xl:grid-cols-2 m-[2%] place-items-center">
            <div className="w-h-screen xl:w-h-screen ml-[20%]  cols-span-6">
              <p className="font-(--font-regular)  text-[#abb2bf] text-[14px] xl:text-[1rem]">
                {con('describe')}
              </p>
            </div>
            <div className="flex flex-col justify-start items-center border-white rounded border-[2px] p-2 w-[300px] h-[103px] cols-span-6 xl:mr-[-30%]">
              <h4 className="font-(--font-bold)  text-white text-[22px] ">
                {con('link')}
              </h4>
              <hr className=" w-[300px] h-1 text-white " />
              <a
                href="vankar.chaitanya@outlook.com"
                target="_blank"
                rel="noopener"
                className="font-(--font-regular)  text-[#abb2bf] text-[14px] flex items-center"
              >
                <Image src={Email} alt="emailicon" />
                vankar.chaitanya@outlook.com
              </a>
            </div>
          </div>
        

    <Footer />
    </>
  )
}