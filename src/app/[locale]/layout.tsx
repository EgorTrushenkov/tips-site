import localFont from "next/font/local";
import Header from "@/components/header/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import "./globals.scss";
import Script from "next/script";
import { Suspense } from "react";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";

const HelveticaNeueCyr = localFont({
  src: "../../../public/fonts/HelveticaNeueCyr-Roman.woff",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export interface GenerateMetadataParams {
  params: { locale: string };
}

export async function generateMetadata() {
  // const locale = await getLocale();
  const t = await getTranslations("Metadata");

  return {
    title: t("title1"),
    description: t("description1"),
    keywords: t("keywords1"),
    metadataBase: new URL("https://webstudio-tips.ru"),
    openGraph: {
      title: t("titleOpenGraph1"),
      description: t("descriptionOpenGraph1"),
      url: "https://webstudio-tips.ru",
      images: [
        {
          url: "/images/logos/logo.png",
          width: 256,
          height: 256,
          alt: "opengraph",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <meta name="yandex-verification" content="26a74fdfb0140f6a" />
      <meta
        name="google-site-verification"
        content="WfrphM5PtNrpsti-a-uVn63yM7Ia222zeeQokFXo97M"
      />
      <meta property="og:image" content="https:/webstudio-tips.ru/images/logos/logo.png" />
      <meta property="og:image:width" content="128" />
      <meta property="og:image:height" content="128" />
      <body className={HelveticaNeueCyr.className}>
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(98342954, "init", {
                  defer: true,
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
            });`}
        </Script>
        <Suspense fallback={<></>}>
          <YandexMetrika />
        </Suspense>
        <NextIntlClientProvider messages={messages}>
          <div className="w-full lg:pt-[70px]">
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
