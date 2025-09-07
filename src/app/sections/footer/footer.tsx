import { Instagram, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo-white.svg";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-mrclinics-primary p-10 rounded-2xl mt-32 mb-10">
      <div className={`flex flex-col gap-6 items-center `}>
        {/* Logo */}
        <Image src={logo} alt={t("logoAlt")} className="h-10 mb-2" />

        {/* Description */}
        <p className="text-sm text-white mb-2 max-w-xs text-center">
          {t("description")}
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.instagram.com/mrclinics/?hl=ar"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label={t("instagram")}
          >
            <Instagram className="h-5 w-5 text-gray-600" />
          </a>
          <a
            href="https://wa.me/+966548066121"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label={t("whatsapp")}
          >
            <MessageCircle className="h-5 w-5 text-gray-600" />
          </a>
          <a
            href="tel:+966548066121"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            aria-label={t("phone")}
          >
            <Phone className="h-5 w-5 text-gray-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}
