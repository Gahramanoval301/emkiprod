import { useTranslation } from "react-i18next";

export function useBlogsData() {
  const { t } = useTranslation();

  const {
    id: ids,
    url: urls,
    cardElement: { title: titles, desc: descriptions },
  } = t("blogs", { returnObjects: true });

  const blogData =
    Array.isArray(ids) &&
    Array.isArray(urls) &&
    Array.isArray(titles) &&
    Array.isArray(descriptions)
      ? ids.map((id, index) => ({
          id,
          url: urls[index],
          title: titles[index],
          desc: descriptions[index],
        }))
      : [];

  return { blogData, t };
}
