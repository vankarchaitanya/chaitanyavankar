import { NextIntlClientProvider,hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"Chaitanya",
  description:'Web Developer'
}

export default async function LocaleLayout({
  children,
  params
}: {children:React.ReactNode; params:Promise<{locale:string}>;}){
  const {locale} = await params;

  if(!hasLocale(routing.locales,locale)){
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning data-qb-installed>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale}>
          {children}</NextIntlClientProvider>
      </body>
    </html>
  )
};