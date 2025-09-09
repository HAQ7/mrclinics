"use client";

import Image from "next/image";
import cbahiImage from "@/assets/certificate/cbahi.png";
import whiteGlow from "@/assets/certificate/white-glow.png";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Certificate() {
    const t = useTranslations("certificate");
    const variants = {
        visible: { y: 0 },
    };

    return (
        <motion.section
            whileInView={"visible"}
            transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                staggerChildren: 0.3,
            }}
            viewport={{ margin: "-20% 0px -20% 0px", once: true }}
            className="bg-mrclinics-primary overflow-hidden p-10 grid lg:grid-cols-2 grid-cols-1 place-items-center text-white w-full rounded-2xl lg:gap-0 gap-20 relative lg:rtl:text-right lg:ltr:text-left text-center mb-32"
        >
            <Image
                src={whiteGlow}
                className="absolute top-0 rtl:right-0 ltr:left-0 ltr:-scale-x-100  lg:w-1/2 w-full h-1/2"
                alt="white glow"
            />
            <motion.div
                initial={{ y: "-150%" }}
                variants={variants}
                transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 25,
                }}
                className="z-10"
            >
                <Image src={cbahiImage} width={300} alt="CBAHI Certificate" />
            </motion.div>
            <div className="max-w-xl grid gap-5">
                <h2 className="font-bold text-4xl leading-tight">
                    {t("title")}
                </h2>
                <p>{t("description")}</p>
            </div>
        </motion.section>
    );
}
