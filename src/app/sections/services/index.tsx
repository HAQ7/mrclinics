import { NavSection } from "@/components/nav-section";
import { useTranslations } from "next-intl";
import tools from "@/assets/services/tools.svg";
import tooth from "@/assets/services/tooth.svg";
import bill from "@/assets/services/bill.svg";

import ServiceCard from "./service-card";

export default function Services() {
  const t = useTranslations("services");
  return (
    <NavSection className="grid place-items-center" sectionId="services">
      <h1 className="font-bold text-4xl leading-tight">{t("title")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 mt-10 h-[500px]">
        <ServiceCard title={t("service1.title")} services={[t("service1.listItem1"), t("service1.listItem2"),t("service1.listItem3"), t("service1.listItem4")]} icon={bill} />
        <ServiceCard title={t("service2.title")} services={[t("service2.listItem1"), t("service2.listItem2"),t("service2.listItem3")]} icon={tools} reverse />
        <ServiceCard title={t("service3.title")} services={[t("service3.listItem1"), t("service3.listItem2"),t("service3.listItem3")]} icon={tooth} />
      </div>
    </NavSection>
  );
}
