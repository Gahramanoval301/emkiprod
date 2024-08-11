import { useLocation } from "react-router";
import PageContainer from "../components/common_/PageContainer";
import { useTranslation } from "react-i18next";

function Blog() {

    const location = useLocation();

    const { id, url, title, desc } = location.state
    
    const { t } = useTranslation();
    
    const { id: ids, url: urls, cardElement: { title: titles, desc: descriptions } } = t('blogs', { returnObjects: true });
    
    const updatedDesc = descriptions[id].split('bosluq')

    const blogData = Array.isArray(ids) && Array.isArray(urls) && Array.isArray(titles) && Array.isArray(descriptions)
        ? ids.map((id, index) => ({ id, url: urls[index], title: titles[index], desc: descriptions[index], })) : [];

        
    return (
        <PageContainer>
            <div className="m-auto w-11/12 sm:w-4/5 pt-24 xl:mb-0 sm:pt-24 md:pt-20 xl:pt-14">
                <img className="rounded-[28px] w-full h-auto" src={url} alt="Image" />
                <h1 className="text-xl md:text-4xl text-white mb-16 mt-10">{titles[id]}</h1>
                {updatedDesc.map((text, i) => <p key={i} className="text-white my-6 text-sm md:text-base">{text}</p>)}
            </div>
        </PageContainer>
    )
}

export default Blog