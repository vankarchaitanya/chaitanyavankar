'use clients';
import { useTranslations } from "next-intl";
import Desidev from "../../../public/Desidev.png"
import Image from "next/image";
function HeroComponent() {
    const t = useTranslations('HomePage');
  return (
    <>
            {/*Hero Section */}
        <div className="grid  grid-cols-1 xl:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 sm:gap-4 gap-5 m-[2%] place-items-center">
          <div className="flex flex-col justify-center items-start gap-[10px] h-[20vh] cols-span-6">
            <h1 className="font-(--font-bold) text-[18px] text-white xl:text-[2rem] 2xl:text-[2.5rem] md:text-[32px] text-center">
              {t('title')}
              <strong className="text-[#c778dd]">  {t('role')} </strong>
              
            </h1>
            <p
              className="font-(--font-regular) text-[16px] text-[#abb2bf] text-center
          xl:text-[22px] 2xl:[text-26px]"
            >
                {t('description')}
            </p>
          </div>
        <Image 
        src={Desidev}
        priority
        alt="header-image"
              className="w-[257] h-[286px]
            cols-span-6
            xl:w-[457px] xl:h-[386px] "
            unoptimized={true}
        />
        </div>
        {/* Quote */}
        <div className="flex justify-center items-center m-0">
          <div className="w-[90%] max-w-[600px] text-center p-[40px]  bg-background  ">
            <p className=" rounded-lg border-white border-[1px] text-[#c778dd] font-(--font-regular) text-[1.8rem] 2xl:text-[2.5rem]">
              <strong>&rdquo;</strong> {t('quote')} <strong>&ldquo;</strong>
            </p>
            <p className="text-[#abb2bf] text-end font-(--font-bold) spacing-2  text-[16px] ">
              - {t('person')}
            </p>
          </div>
        </div>
    </>
  )
}

export default HeroComponent
