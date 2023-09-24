import { FaFacebook, FaTwitter ,FaLinkedinIn} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-[100%] h-[30vh] bg-white flex flex-col md:flex-row items-center justify-between px-[200px] py-[20px] text-black" id="contact">
      <h1 className="font-bold text-[32px] ">PortFolio</h1>
      <div className="flex gap-[20px] md:gap-[50px]">
        <a className="text-primary font-semibold text-[16px]" href="#home">
          Home
        </a>
        <a className="text-primary font-semibold text-[16px]" href="#work">
          Work
        </a>
        <a className="text-primary font-semibold text-[16px]" href="#about">
          About
        </a>
        <span className="text-primary font-semibold text-[16px]" href="#contact">
          Contact
        </span>
      </div>
      <div className="flex gap-[20px]">
          <a href="/facebook">
            <FaFacebook  className="w-[24px] h-[24px]"/>
          </a>
          <a href="/twitter">
            <FaTwitter  className="w-[24px] h-[24px]"/>
          </a>
          <a href="/linkedin">
            <FaLinkedinIn  className="w-[24px] h-[24px]"/>
          </a>
        </div>
    </div>
  );
}

export default Footer;
