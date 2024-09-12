import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
        >Santosh</motion.span>
        <div className="social">
          <a href="https://www.facebook.com/santosh.acharya.0" target="_blank">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/santsnot/" target="_blank">
            <img src="/instagram.png" alt="insta" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src="/youtube.png" alt="youtube" />
          </a>
          <a href="https://www.dribbble.com" target="_blank">
            <img src="/dribbble.png" alt="dribble" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
