import { GiRunningShoe } from "react-icons/gi";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row  flex gap-[10%] bg-slate-700 py-5 px-2 text-gray-300 sm:px-5">
        <div className="col flex-col">
          <h2 className="flex gap-[2px] text-2xl">
            <GiRunningShoe />
            NIKi
          </h2>
          <p>bandung</p>
          <div className="social mt-5 flex gap-2 text-xl">
            <AiFillFacebook />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaTiktok />
          </div>
        </div>
        <div className="col ml-auto flex flex-col">
          <h2>Learn more</h2>
          <ul>
            <li>Media</li>
            <li>Location</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col flex flex-col">
          <h2>About NIKi</h2>
          <ul>
            <li>Jobs</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="copy whitespace-nowrap bg-black py-2 text-center text-xs text-gray-400">
        <p>NiKi teams is shoe store Located on bandung west java</p>
        <p>Copyright &copy; 2021-2022, bandung, west Java</p>
      </div>
    </footer>
  );
};

export default Footer;
