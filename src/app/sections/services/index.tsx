import { NavSection } from "@/components/nav-section";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  return (
    <NavSection className="grid place-items-center" sectionId="services">
      <h1 className="font-bold text-4xl leading-tight">{t("title")}</h1>
    </NavSection>
  );
}
