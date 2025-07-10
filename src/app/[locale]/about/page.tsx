"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Animedev from "../../../../public/Animedev.png";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import vectorset from '../../../../public/svg/vectorset.svg'
function page() {
  const trans = useTranslations("AboutMe");
  const t = useTranslations("Skills");
  const fun = useTranslations("funfacts");
  return (
    <>
      <Header />

      <div className="w-screen ">
        <h1 className="text-white font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-(--primary)">/</strong>
          {trans("title")}
        </h1>
        <p className="font-(--font-regular)  text-[#abb2bf] text-[1.4rem] ml-[5%]">
          {trans("paragarph")}
        </p>

        <div
          className="grid 
           grid-cols-1 xl:grid-cols-2 md:grid-cols-2 
           2xl:grid-cols-2 sm:gap-4 gap-6  place-items-center sm:m-[2%]"
        >
          <div className="flex flex-col justify-center item-center gap-[20px] cols-span-6 w-[90%] h-[400px] m-10 md:m-[1%] xl:m-4 2xl:m-4">
            {trans.raw("describe").map((item: string) => (
              <p
                key={item}
                className="font-(--font-regular)  text-[#abb2bf] text-[20px] place-items-center"
              >
                {item}
              </p>
            ))}
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
      <div className="w-screen">
        <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-[#c778dd]">#</strong>
          {t("title")}
        </h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 grid-cols-1 gap-4  place-items-center p-4">
          {t.raw("skill").map((item: { name: string; lang: string }) => (
            <div
              key={item.name}
              className="flex flex-col justify-start items-center border-white rounded border-[2px] p-2 w-[178px] h-[103px]"
            >
              <h4 className="font-(--font-bold) text-white text-[22px]">
                {item.name}
              </h4>
              <hr className="w-[178px] h-1 text-white " />
              <p className="font-(--font-regular)  text-[#abb2bf] text-[14px]">
                {item.lang}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px] ml-[5%] sm:ml-[2%]">
          <strong className="text-[#c778dd]">#</strong>
          {fun("title")}
        </h3>
        <div
className="grid grid-cols-1 w-screen xl:grid-cols-2 2xl:grid-cols-2 sm:p-2 gap-2 p-4 place-items-center xl:ml-[5%] 2xl:ml-[5%]"
>
       <div>
           {fun.raw("list").map((item: string) => (
            <div
              key={item}
            className="cols-span-8 flex flex-row jusity-center items-center gap-[10px] flex-wrap"
            >
              <p className="text-[14px] font-(--regular) text-[#c778dd] m-1
               border-(--gray) border-[1px] rounded-lg p-1 xl:text-[24px] 2xl:text-[24px]">
                {item}
              </p>
            </div>
          ))}
       </div>
          <Image src={vectorset} alt="vectors" 
          unoptimized={true}
          />

        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
