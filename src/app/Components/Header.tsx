'use client';
import React,{ChangeEvent, useState} from "react";
import logo from "../../../public/svg/logo.svg";
import Menu from "../../../public/svg/Menu.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname,useRouter} from "@/i18n/navigation";
import Close from "../../../public/svg/Close.svg"
import Linkedin from "../../../public/svg/Linkedin.svg"
import Github from "../../../public/svg/Github.svg"
import Figma from "../../../public/svg/Figma.svg"
import {locales} from '../../i18n/routing';

function Header() {
    const router = useRouter();
    const t = useTranslations('menu');
    const path = usePathname();
    const linkhref = ['/','/about','/project','/contact'];
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
      const newLocale = e.target.value;
      router.replace(path,{locale:newLocale})
    }
  return (
    <nav className="p-4  w-full top-0 z-50 h-[10vh]">
    <div className="w-screen flex flex-row justify-evenly items-center gap-[20px]">
      <div className="flex flex-row justify-center items-center gap-[10px] ">
        <Image src={logo} alt="logoicon" className="w-[80px] h-[80px] mb-[-20px]" />
        <h1 className=" text-2xl text-white">{t('name')}</h1>
      </div>

      <div className="flex flex-row justify-center items-center gap-2">
         {
          t.raw('links').map((label:string,index:number) => (
            <div key={index} className=" flex-row justify-center items-center gap-[20px] hidden 
      xl:flex xl:flex-row 2xl:flex 2xl:flex-row">
              <Link href={linkhref[index]}
              className={` text-[16px] text-[#abb2bf] [&.active]:text-white hover:text-white active:text-white ${
            path === linkhref[index] ? "active" : ""
          } `}
              >
               <strong className="font-(--font-bold) text-(--primary)">#</strong> {label}
              </Link>
            </div>
          ))
        }
      <div className="flex flex-row justify-center items-center gap-2">

      <Image src={Menu} alt="menuicon" className="w-[30px] h-[30px]
          block xl:hidden 2xl:hidden
      " onClick={() => setIsOpen(true)}/>

      <select onChange={handleChange}
      className="px-3 py-2 bg-white border border-gray-300 rounded-md 
      shadow-sm text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[primary]
       focus:border-[primary]"
      defaultValue={path.split('/')[1]}>
      {locales.map((locale) => (
        <option key={locale}
        value={locale}>
          {locale.toLowerCase()}
        </option>
      ))}
      </select>
      </div>
      </div>

     

    </div>

        {
        isOpen === true && (<div className="fixed inset-0 bg-(--background) text-white flex flex-col items-center justify-center space-y-6 text-2xl font-semibold z-50 transition-opacity duration-300 ">
          <Image src={Close} alt="closeicon" className="w-[30px] h-[30px]
          block xl:hidden 2xl:hidden
      " onClick={() => setIsOpen(false)}/>
     
          {
            t.raw('links').map((label:string,index:number) => (
            <div key={index}
            className=" flex flex-col justify-center items-center gap-[20px] mt-[-10px]">
            <Link href={linkhref[index]}
              className={` text-[16px] text-[#abb2bf] [&.active]:text-white hover:text-white active:text-white ${
            path === linkhref[index] ? "active" : ""
          } `}
        >
          <strong className="font-(--font-bold) text-(--primary)">#</strong>{label}
        </Link>
            </div>
            )) 
          }
       
        <h2 className="font-(--font-bold) text-[2rem] text-white">Media</h2>
        <div className="flex flex-row justify-center items-center gap-[20px] flex-wrap">
          <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/vankarchaitanya"
          >
            <Image
              src={Github}
              alt="Github"
              className="w-[100px] h-[100px ]  fill-black-600"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/vankarchaitanya/"
          >
            <Image
              src={Linkedin}
              alt="Linkedin"
              className="w-[100px] h-[100px ]  fill-black-600"
            />
          </Link>

          <Link
            target="_blank"
            rel="noopener"
            href="https://www.figma.com/in/chaitechie/"
          >
            <Image
              src={Figma}
              alt="Figma"
              className="w-[100px] h-[100px ]  fill-black-600"
            />
          </Link>
        </div>
        </div>) 
      }
    </nav>
  );
}

export default Header;