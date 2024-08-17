const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);
import axios from "axios"

export const getAllPageData = async () => {
    const { data } = await axios.get(`${apiKey}/page`);
    return data;
};

export const getAnnouncementTranslations = async () => {
    const { data } = await axios.get(`${apiKey}/announcement-translations`);
    return data;
};

export const getAnnouncementTranslationsId = async (languageId) => {
    const { data } = await axios.get(`${apiKey}/announcement-translations/${languageId}`);
    return data;
};

// example for use 
// useEffect(() => {
//     getAllPageData().then((data) => {
//         setData(data);
//     });
// }, []);
// console.log(data);
