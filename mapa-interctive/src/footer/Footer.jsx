import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import logo from "../assets/logo_sm.png";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-slate-200">
        <div className="container mx-auto  py-[7.5rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8 resize-y-100 resize-x-100">
              <img
                src={logo}
                alt="footer_logo"
                className="w-20"
              />
              <p className="text-[15px] font-medium text-[#646464]">
              Explorando juntos la diversidad y riqueza de los departamentos de Colombia.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff9844] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} GeoCult <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                >
                  Santiago Pupo y Kevin Capera
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Colombia</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-orange-400"></span>

              <p className="text-[16px] hover:text-[#ff9844] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Noticias
              </p>
              <p className="text-[16px] hover:text-[#ff9844] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Contenidos
              </p>
              <p className="text-[16px] hover:text-[#ff9844] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Acerca de
              </p>
              <p className="text-[16px] hover:text-[#ff9844] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Ayuda
              </p>
              
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Aprende</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-orange-400"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Contacto maestro
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                Red Aprende
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                Co-lab
              </p>
            
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;