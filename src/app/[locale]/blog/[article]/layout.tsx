import localFont from "next/font/local";
import Header from "@/components/header/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import "../../globals.scss";
import Script from "next/script";
import { Suspense } from "react";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";
import { Analytics } from "@vercel/analytics/react";
import BlogPost from "@/app/[locale]/blog/[article]/page";

const HelveticaNeueCyr = localFont({
  src: "../../../../../public/fonts/HelveticaNeueCyr-Roman.woff",
});

// export interface GenerateMetadataParams {
//   params: { article: string };
// }

// export async function generateMetadata() {
//   // const locale = await getLocale();
//   const t = await getTranslations("Metadata");

//   return {
//     title: t("title1"),
//     description: t("description1"),
//     keywords: t("keywords1"),
//     metadataBase: new URL("https://webstudio-tips.ru"),
//     openGraph: {
//       title: t("titleOpenGraph1"),
//       description: t("descriptionOpenGraph1"),
//       url: "https://webstudio-tips.ru",
//       images: [
//         {
//           url: "/images/logos/logo.png",
//           width: 256,
//           height: 256,
//           alt: "opengraph",
//         },
//       ],
//     },
//   };
// }

export default async function ArticleLayout(props: article2) {

  return (
    <html>
      {/* dzen-ver */}
      <meta name="zen-verification" content="DFX3e4ldWcVkKaNTtoR9cHqjh2mJqAWScFDaprsOCDKervBndh8GMTxiw5YBmVWV" />
      <meta name="yandex-verification" content="26a74fdfb0140f6a" />
      <meta
        name="google-site-verification"
        content="WfrphM5PtNrpsti-a-uVn63yM7Ia222zeeQokFXo97M"
      />
      <meta property="og:image" content="https:/webstudio-tips.ru/images/logos/logo.png" />
      <meta property="og:image:width" content="128" />
      <meta property="og:image:height" content="128" />
      <body className={HelveticaNeueCyr.className}>
        <h1>HUI</h1>
        <BlogPost article={article2}/>
      </body>
    </html>
    
  );
}
