import React from "react";
import { WobbleCard } from "./wobble-card";
import googleMap from "@/assets/google-map.svg";
import iphone from "@/assets/iphone.svg";
import effectSmall from "@/assets/effect-small.svg";
import effectMedium from "@/assets/medium-effect.svg";
import effectLarge from "@/assets/large-effect.svg";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="px-4 py-8">
      <div className="p-8 rounded-2xl">
        <h2
          className={`text-2xl font-bold text-white mb-8 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t("title")}
        </h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <WobbleCard
            containerClassName={`col-span-1 lg:col-span-2 h-full bg-white min-h-[500px] lg:min-h-[300px] shadow-lg`}
            className=""
          >
            <div className="max-w-xs" dir={isRTL ? "rtl" : "ltr"}>
              <h2
                className={`${
                  isRTL ? "text-right" : "text-left"
                } text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black`}
              >
                {t("card1.title")}
              </h2>
              <p
                className={`my-4 ${
                  isRTL ? "text-right" : "text-left"
                } text-base/6 text-neutral-800`}
              >
                {t("card1.description")}
              </p>
              <button className="bg-mrclinics-primary hover:bg-mrclinics-primary/90 text-white font-semibold py-3 px-5 rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl crusor-pointer">
                {t("card1.button")}
              </button>
              <Image
                src={googleMap}
                width={300}
                height={300}
                alt={t("card1.imageAlt")}
                className="absolute -right-4 lg:-right-[0%] -bottom-2 object-contain rounded-2xl"
              />
              <Image
                src={effectMedium}
                alt="effect"
                className="absolute bottom-0 right-0 -z-50"
              />
            </div>{" "}
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-white shadow-lg">
            <h2
              className={`max-w-80 ${
                isRTL ? "text-right" : "text-left"
              } text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black`}
            >
              {t("card2.title")}
            </h2>
            <p
              className={`mt-4 max-w-[26rem] ${
                isRTL ? "text-right" : "text-left"
              } text-base/6 text-neutral-800`}
            >
              {t("card2.description")}
            </p>
            <Image
              src={effectSmall}
              alt="effect"
              className="absolute left-0 bottom-0"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-white min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] shadow-lg">
            <div className="max-w-sm" dir={isRTL ? "rtl" : "ltr"}>
              <h2
                className={`max-w-sm md:max-w-lg ${
                  isRTL ? "text-right" : "text-left"
                } text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black`}
              >
                {t("card3.title")}
              </h2>
              <p
                className={`my-4 max-w-[26rem] ${
                  isRTL ? "text-right" : "text-left"
                } text-base/6 text-neutral-800`}
              >
                {t("card3.description")}
              </p>
              <button className="bg-mrclinics-primary hover:bg-mrclinics-primary/90 text-white font-semibold py-3 px-5 rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl crusor-pointer">
                {t("card3.button")}
              </button>
            </div>
            <Image
              src={iphone}
              width={300}
              height={300}
              alt={t("card3.imageAlt")}
              className="absolute -right-10 md:-right-[20%] lg:right-[20%] top-10 object-contain rounded-2xl"
            />

            <Image
              src={effectLarge}
              alt="effect"
              className="absolute bottom-0 right-20 -z-50"
            />
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
