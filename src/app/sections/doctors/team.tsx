"use client";

import React from "react";
import DoctorCard from "./doctorCard";
import { useLocale, useTranslations } from "next-intl";
import { NavSection } from "@/components/nav-section";
import { motion } from "motion/react";
import { doctorsData } from "./data";

// Doctors data array

export default function Team() {
  const t = useTranslations("team");
  const local = useLocale();
  const isRTL = local === "ar";

  return (
    <NavSection sectionId="team" className="mb-32">
      <div className="bg-mrclinics-primary p-10 rounded-2xl">
        <h1 className="font-bold text-4xl leading-tight text-white text-center mb-10">
          {t("title")}
        </h1>

        <motion.div
          transition={{ staggerChildren: 0.1 }}
          whileInView={"visible"}
          initial="hidden"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {doctorsData.map((doctor, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
              key={index}
              className="relative w-full max-w-68 bg-white aspect-square rounded-2xl overflow-hidden shadow-md"
            >
              <DoctorCard
                image={doctor.image}
                title={isRTL ? doctor.titleAr : doctor.titleEn}
                description={
                  isRTL ? doctor.descriptionAr : doctor.descriptionEn
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </NavSection>
  );
}
