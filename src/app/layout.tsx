import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { Metadata } from "next";
import { NavSectionProvider } from "@/components/nav-section";
import { getLocale, getMessages } from "next-intl/server";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "MRclinics",
  description: "هنا لنعتني بابتسامتك ونمنحك رعاية أسنان بجودة",
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body className="grid place-items-center overflow-x-hidden">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NavSectionProvider>{children}</NavSectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
