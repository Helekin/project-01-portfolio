import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <Link className="btn btn-outline-light btn-large" href={route} locale={otherLocale}>
      {t("text.switch", { locale: otherLocale })}
    </Link>
  );
};

export default LocaleSwitcher;
