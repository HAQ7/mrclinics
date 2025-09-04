"use client"

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { motion } from "motion/react";

export default function ServiceCard({
  title,
  services,
  icon,
  reverse = false,
}: {
  title: string;
  services: string[];
  icon: StaticImport;
  reverse?: boolean;
}) {
  return (
    <motion.div 
      className="shadow-lg rounded-2xl p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 25,
      }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <div
        className={`h-full flex ${
          reverse ? "flex-col-reverse" : "flex-col"
        } items-center justify-between gap-5`}
      >
        <motion.div 
          className="grid gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 25,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-3xl">{title}</h3>
          <ul className="list-none list-inside text-mrclinics-secondary">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 25,
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          <Image src={icon} alt={title} />
        </motion.div>
      </div>
    </motion.div>
  );
}
