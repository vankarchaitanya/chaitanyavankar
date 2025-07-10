import React from 'react'
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import Linkedin from '../../../../public/svg/Linkedin.svg';
import Github from '../../../../public/svg/Github.svg';
import Hashnode from '../../../../public/svg/Hashnode.svg';
import Figma from '../../../../public/svg/Figma.svg';
import Email from '../../../../public/svg/Email.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
function page() {
  const con = useTranslations('Contact')
  return (
        <>
      <Header />
      <h1 className="text-white font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
        <strong className="text-(--primary)">/</strong>{con('title')}
      </h1>
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
            href="mailto:vankar.chaitanya@outlook.com"
            
            className="font-(--font-regular)  text-[#abb2bf] text-[14px] flex items-center"
          >
            <Image src={Email} alt="emailicon" />
            vankar.chaitanya@outlook.com
          </a>
        </div>
      </div>
 
      {/* Social media links */}
      <div className="w-screen h-[15vh]">
        <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-[#c778dd]">#</strong>{con('social')}
        </h3>
        <div className="flex flex-row justify-center items-center gap-[20px] flex-wrap">
          <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/chaitechie"
          >
            <Image
              src={Github}
              alt="Github"
              className="w-[50px] h-[50px ]  fill-(--gray)"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/chaitechie/"
          >
            <Image
              src={Linkedin}
              alt="Linkedin"
              className="w-[50px] h-[50px ]  fill-(--gray)"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://chaitechie.hashnode.dev"
          >
            <Image
              src={Hashnode}
              alt="Github"
              className="w-[30px] h-[30px ]  fill-(--gray)"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://www.figma.com/in/chaitechie/"
          >
            <Image
              src={Figma}
              alt="Linkedin"
              className="w-[50px] h-[50px ]  fill-(--gray)"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page
