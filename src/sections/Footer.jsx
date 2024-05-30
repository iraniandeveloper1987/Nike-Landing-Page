import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer id="footer" className="max-container">
      <div
        className="flex justify-between items-start gap-20
      flex-wrap max-lg:flex-col "
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer-logo" width={150} height={46} />
          </a>
          <p
            className="mt-6 text-base leading-7
            font-montserrat text-white-400 sm:max-w-sm"
          >
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social, index) => (
              <div
                key={index}
                className="flex justify-center items-center
                 w-12 h-12 bg-white rounded-full"
              >
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20 ">
          {footerLinks.map((footerLink, index) => (
            <div key={index}>
              <h4
                className="text-white-400 font-montserrat
               text-2xl leading-normal font-medium mb-6"
              >
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((item, index) => (
                  <li
                    key={index}
                    className="mt-3 text-white-400 font-montserrat
                  text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-between text-white-400 mt-24
       max-sm:flex-col max-sm:items-center"
      >
        <div
          className="flex flex-1 justify-start items-center  gap-2 
        font-montserrat cursor-pointer"
        >
          <img
            src={copyrightSign}
            alt="copyright-sign"
            width={24}
            height={24}
            className="rounded-full m-0"
          />
          <p>Copyright 2024. All Rights Reserved</p>
        </div>
        <p className="cursor-pointer font-montserrat">terms and conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
