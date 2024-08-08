import React from "react";
import FooterCopyright from "./FooterCopyright";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section id="footer">
      <div className="border-[1px] border-[#222b45] border-style mt-[80px]">
        <div className="mx-auto w-11/12 sm:w-4/5 xl:mb-0 pt-12 sm:pt-16 md:pt-16 xl:pt-16 pb-2 sm:pb-2 md:pb-2 xl:pb-2  MuiBox-root css-0">
          <div className="flex align-start justify-between">
            <div className="footer-logo">
              <img src="/assets/logo-medium.png" alt="footer logo" />
            </div>
            <div className="flex justify-evenly w-full">
              <div className="footer-column">
                <h3 className="text-[#f5f5f6] text-base mb-5 font-medium">
                  Social
                </h3>
                <Link to="" target="_blank">
                  <div className="flex mb-3">
                    <img
                      src="/assets/facebook.svg"
                      className="mr-2 w-4"
                      alt="facebook"
                    />
                    <span className="text-[#E4E9F2] text-base font-normal">
                      Facebook
                    </span>
                  </div>
                </Link>
                <Link to="" target="_blank">
                  <div className="flex mb-3">
                    <img
                      src="/assets/instagram.svg"
                      className="mr-2 w-4"
                      alt="instagram"
                    />
                    <span className="text-[#E4E9F2] text-base font-normal">
                      Instagram
                    </span>
                  </div>
                </Link>
              </div>
              <div className="footer-column">
                <h3 className="text-[#f5f5f6] text-base mb-5 font-medium">
                  Information
                </h3>
                <Link to="">
                  <div className="flex mb-3">
                    <span className="text-[#E4E9F2] text-base font-normal">
                      About us
                    </span>
                  </div>
                </Link>
                <Link to="">
                  <div className="flex mb-3">
                    <span className="text-[#E4E9F2] text-base font-normal">
                      Sponsor
                    </span>
                  </div>
                </Link>
              </div>
              <div className="footer-column">
                <h3 className="text-[#f5f5f6] text-base mb-5 font-medium">
                  Contact
                </h3>
                <Link href="" target="_blank">
                  <div className="flex mb-3">
                    <img src="/assets/sms.svg" className="mr-2 w-4" alt="sms" />
                    <span className="text-[#E4E9F2] text-base font-normal">
                      office@emki.az
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FooterCopyright />
      </div>
    </section>
  );
};

export default Footer;
