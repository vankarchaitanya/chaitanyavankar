'use client'
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
function Project() {
    const trans = useTranslations('TopProject');
    const project = trans.raw('project');
  return (
 <div className="w-screen max-h-fit">
          <div className="flex justify-center items-between gap-[20px]">
            <div className="flex flex-[2] items-center ml-[5%]">
              <h3 className="text-[#abb2bf] font-(--font-bold) text-[32px]">
                <strong className="text-[#c778dd]">#</strong> {trans('title')}
              </h3>
              <hr className="w-[40%] h-[2px] bg-[#c778dd] " />
            </div>

          </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 2xl:grid-cols-4 m-[2%] place-items-center md:grid-cols-2">
            {project.map((item: { title:string,image:string,
            width:number,height:number, link:string, techstack:string,describe:string}) => (
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
              className="text-[#abb2bf] w-[100px] h-[4vh] text-center font-(--font-regular)  text-[12px]  border-[#c778dd] mt-[2%] border-[1px] rounded "
            >
              GitHub Repo
            </Link>
          </div>

               </div>  
            ))}
        </div>
        </div>
  )
}

export default Project
