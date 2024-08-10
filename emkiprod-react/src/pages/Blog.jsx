import { useLocation } from "react-router";
import PageContainer from "../components/common_/PageContainer";

function Blog() {
    const location = useLocation();

    const { url, title, desc } = location.state
    const updatedDesc = desc.split('bosluq')
    

    return (
        <PageContainer>
            <div className="m-auto w-11/12 sm:w-4/5 pt-24 xl:mb-0 sm:pt-24 md:pt-20 xl:pt-14">
                <img className="rounded-[28px] w-full h-auto" src={url} alt="Image" />
                <h1 className="text-xl md:text-4xl text-white mb-16 mt-10">{title}</h1>
                {updatedDesc.map((text, i) => <p key={i} className="text-white my-6 text-sm md:text-base">{text}</p>)}
            </div>
        </PageContainer>
    )
}

export default Blog