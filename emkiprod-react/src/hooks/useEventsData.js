import { useTranslation } from "react-i18next";
export function useEventsData() {
  const { t } = useTranslation();

  const {
    id: ids,
    thumbnail: thumbnails,
    title: titles,
    price: prices,
    date: dates,
    location: locations,
    ticketURL: ticketURLs,
  } = t("events", { returnObjects: true });
  const eventsData =
    Array.isArray(ids) &&
    Array.isArray(thumbnails) &&
    Array.isArray(titles) &&
    Array.isArray(prices) &&
    Array.isArray(dates) &&
    Array.isArray(locations) &&
    Array.isArray(ticketURLs)
      ? ids.map((id, index) => ({
          id,
          thumbnail: thumbnails[index],
          title: titles[index],
          price: prices[index],
          date: dates[index],
          location: locations[index],
          ticketURL: ticketURLs[index]
        }))
      : [];

  return { eventsData, t };
}
