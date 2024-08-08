import React from "react";
import cardImg from "../../public/assets/Rectangle 58.png";

function BlogCard() {
  return (
    <a className="h-[320px]">
      <div className="bg-[#101426] rounded-[50px] h-[320px] m-[0 0 40px] w-[370px] cursor-pointer transition ease-in-out delay-400">
        <div className="relative flex items-center justify-center z-[100]">
          <img src={cardImg} alt="card image" className="" />
        </div>
        <div className="z-[102] flex items-center justify-between relative top-[-60px] p-[15px]">
          <h4 className="whitespace-nowrap text-white font-medium text-2xl overflow-hidden">
            Thomas Anders’s Baku concert
          </h4>
        </div>
        <div className="bg-[#101426] flex h-[90px] relative top-[-80px] items-end border-[1px] border-solid border-[#192038] rounded-b-3xl pt-[10px] px-[20px] pb-[12px] transition ease-in-out delay-400 hover:bg-[#fff]">
          <p className="whitespace-normal text-[#edf1f7] h-[3rem] w-full hover:text-[#151a30]">
            Show your event to the world through any platform. We are leaders in
            streaming and...
          </p>
        </div>
      </div>
    </a>
  );
}

export default BlogCard;
