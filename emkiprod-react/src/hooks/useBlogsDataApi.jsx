import { useEffect, useState } from "react";
import { getAllPageData } from "../api/data";
import { useTranslation } from "react-i18next";

export function useBlogsDataApi() {
    const [pageData, setPageData] = useState([]);
    const { i18n } = useTranslation();

    const getLanguageId = () => {
        switch (i18n.language) {
            case "az":
                return 1
            case "en":
                return 2;
            case "ru":
                return 3;
        }
    }

    useEffect(() => {
        getAllPageData().then((data) => {
            setPageData(data);
        })
    }, [])

    const currentLanguageId = getLanguageId()
    const filteredPageData = pageData.find((data) => data.id === currentLanguageId)
    console.log(filteredPageData && filteredPageData.postTranslations);
    if (filteredPageData) {

        return filteredPageData.postTranslations
    }

}