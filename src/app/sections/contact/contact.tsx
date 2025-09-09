"use client";

import React from "react";
import { WobbleCard } from "./wobble-card";
import googleMap from "@/assets/google-map.png";
import effectSmall from "@/assets/effect-small.svg";
import effectMedium from "@/assets/medium-effect.svg";
import effectLarge from "@/assets/large-effect.svg";
import Image from "next/image";
import whatsaap from "@/assets/whatsaap.png";
import { useLocale, useTranslations } from "next-intl";
import { NavSection } from "@/components/nav-section";
import { motion } from "motion/react";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const variants = {
    visible: { y: 0, x: 0 },
  };

  return (
    <NavSection sectionId="contact">
      <h1 className="font-bold text-4xl leading-tight text-center">
        {t("title")}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-10">
        <WobbleCard
          className="flex md:flex-row flex-col justify-between !p-0"
          containerClassName={`lg:col-span-2 bg-white shadow-lg`}
        >
          <motion.div
            dir={isRTL ? "rtl" : "ltr"}
            className="grid place-items-center z-10"
            whileInView={"visible"}
            viewport={{ margin: "-20% 0px -20% 0px", once: true }}
          >
            <motion.div
              variants={variants}
              initial={{ y: "100%" }}
              dir={isRTL ? "rtl" : "ltr"}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="flex flex-col p-10 gap-4"
            >
              <h2 className={`font-semibold text-black text-3xl`}>
                {t("card1.title")}
              </h2>
              <p className={`text-mrclinics-secondary`}>
                {t("card1.description")}
              </p>
              <a href="https://maps.app.goo.gl/oKum5KTyZRCnK3Wv9"  className="bg-mrclinics-primary w-min text-nowrap hover:bg-mrclinics-primary/90 text-white font-semibold py-3 px-5 rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                {t("card1.button")}
              </a>
            </motion.div>
          </motion.div>
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className="flex lg:items-end items-start ltr:justify-end rtl:justify-start relative z-10"
          >
            <Image
            priority
              src={googleMap}
              alt={t("card1.imageAlt")}
              className="max-w-[400px]"
            />
          </div>
          <Image
            src={effectMedium}
            alt="effect"
            className="absolute h-full bottom-0 right-0 opacity-50"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-white shadow-lg ">
          <motion.div
            viewport={{ margin: "-20% 0px -20% 0px", once: true }}
            whileInView={"visible"}
            className="w-full h-full"
          >
            <motion.div
              initial={{ x: "-120%" }}
              variants={variants}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
              className="relative z-10 w-full h-full flex flex-col gap-4"
            >
              <h2
                dir={isRTL ? "rtl" : "ltr"}
                className={`font-bold text-3xl text-black`}
              >
                {t("card2.title")}
              </h2>
              <p
                dir={isRTL ? "rtl" : "ltr"}
                className={`text-mrclinics-secondary`}
              >
                {t("card2.description")}
              </p>
            </motion.div>
          </motion.div>
          <Image
            src={effectSmall}
            alt="effect"
            className="absolute left-0 bottom-0 opacity-50"
          />
        </WobbleCard>
        <WobbleCard
          className="p-0"
          containerClassName="bg-white shadow-lg w-full lg:col-span-3"
        >
          <motion.div
            whileInView={"visible"}
            viewport={{ margin: "-20% 0px -20% 0px", once: true }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            <motion.div
              initial={{ y: "-120%" }}
              variants={variants}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
              dir={isRTL ? "rtl" : "ltr"}
              className="p-10 flex flex-col gap-4 justify-center"
            >
              <h2 className={`text-3xl font-bold text-black`}>
                {t("card3.title")}
              </h2>
              <p className={`text-mrclinics-secondary`}>
                {t("card3.description")}
              </p>
              <a href="https://wa.me/+966548066121" className="bg-mrclinics-primary w-min text-nowrap hover:bg-mrclinics-primary/90 text-white font-semibold py-3 px-5 rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                {t("card3.button")}
              </a>
            </motion.div>
            <div
             
              className="min-h-[300px] h-full grid place-items-center relative"
            >
              <Image
                priority
                src={whatsaap}
                width={300}
                height={300}
                alt={t("card3.imageAlt")}
                className="object-contain rounded-2xl z-10 absolute top-12"
              />

              <Image
                src={effectLarge}
                alt="effect"
                className="absolute bottom-0"
              />
            </div>
          </motion.div>
        </WobbleCard>
      </div>
    </NavSection>
  );
}
