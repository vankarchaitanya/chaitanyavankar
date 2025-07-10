import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en','hi','te'],
    defaultLocale:'en'
});

export const locales = ['en','hi','te'];