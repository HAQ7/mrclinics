"use client";

import { NavSection } from "@/components/nav-section";
import heroBg from "@/assets/hero/hero-section.png";
import Image from "next/image";
import clinicImage from "@/assets/hero/clinic.png";
import { motion } from "motion/react";
import { useTranslations, useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <NavSection className="min-h-screen" sectionId="main">
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute bg-gradient-to-b from-white h-30 w-full z-10" />
        <Image
          src={heroBg}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="object-left"
        />
        <div className="absolute bg-gradient-to-t from-white h-30 w-full bottom-0" />
      </div>

      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 lg:px-8 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              className={`order-2 lg:order-${isRTL ? '2' : '1'} text-center lg:text-start space-y-6 lg:space-y-8`}
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-mrclinics-primary"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("title")}
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-mrclinics-secondary leading-relaxed max-w-2xl lg:ms-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t("description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button className="bg-mrclinics-primary hover:bg-mrclinics-primary/90 text-white font-semibold py-3 px-5 rounded-full text-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {t("button")}
                </button>
              </motion.div>
            </motion.div>

            {/* Clinic Image */}
            <motion.div
              className={`order-1 lg:order-${isRTL ? '2' : '1'} flex justify-center`}
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative w-full max-w-xs lg:max-w-sm xl:max-w-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={clinicImage}
                  alt="Clinic Interior"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </NavSection>
  );
}
