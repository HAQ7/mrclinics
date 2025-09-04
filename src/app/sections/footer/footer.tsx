import { Instagram, Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo-white.svg";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-mrclinics-primary p-8 rounded-2xl">
        <div
          className={`flex flex-col gap-6 items-center ${
            isRTL ? "text-right" : "text-left"
          }`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Logo */}
          <Image src={logo} alt={t("logoAlt")} className="h-10 mb-2" />

          {/* Description */}
          <p className="text-sm text-white mb-2 max-w-xs text-center">
            {t("description")}
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label={t("instagram")}
            >
              <Instagram className="h-5 w-5 text-gray-600" />
            </a>
            <a
              href="https://wa.me/yourNumber"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label={t("whatsapp")}
            >
              <MessageCircle className="h-5 w-5 text-gray-600" />
            </a>
            <a
              href="tel:+123456789"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label={t("phone")}
            >
              <Phone className="h-5 w-5 text-gray-600" />
            </a>
            <a
              href="mailto:example@email.com"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label={t("email")}
            >
              <Mail className="h-5 w-5 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
