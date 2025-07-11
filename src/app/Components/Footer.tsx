import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import logo from "../../../public/svg/logo.svg";
import Image from "next/image";
import Github from "../../../public/svg/Github.svg";
import Linkedin from "../../../public/svg/Linkedin.svg";
import Figma from "../../../public/svg/Figma.svg";
function Footer() {
  const t = useTranslations("Footer");
  return (
    <>
      <div className="w-screen">
        <hr className="w-screen h-[4px] text-(--gray) " />
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
          <div>
            <div className="flex flex-row justify-center items-center gap-[10px] flex-wrap">
              <Image
                src={logo}
                alt="my logo"
                className="w-[50px] h-[50px] mb-[-1%]"
              />
              <h1 className="text-[16px] text-white">{t("title")}</h1>
            </div>
            <p className=" text-[16px] text-(--gray) text-center">
              {t("roles")}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px] ">
            <h1 className=" text-[24px] text-white">{t("social")}</h1>
            <div className="flex flex-row justify-center  gap-[10px]">
              <Link
                target="_blank"
                rel="noopener"
                href="https://github.com/vankarchaitanya"
              >
                <Image
                  src={Github}
                  alt="Github"
                  className="w-[32px] h-[32px ]  fill-(--gray)"
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/vankarchaitanya"
              >
                <Image
                  src={Linkedin}
                  alt="Linkedin"
                  className="w-[32px] h-[32px ]  fill-(--gray)"
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener"
                href="https://www.figma.com/@chaitechie"
              >
                <Image
                  src={Figma}
                  alt="Figma"
                  className="w-[32px] h-[32px ]  fill-(--gray)"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className=" text-[16px] text-(--gray) text-center">{t("copyright")}</p>
    </>
  );
}

export default Footer;
