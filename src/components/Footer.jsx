import logo from "../images/logo5.png";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="bg-black">
      <nav className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <a href="/">
            <img className="h-14" src={logo} alt="Logo" />
          </a>
        </div>

        <div className="hidden xl:block xl:w-auto">
          <ol className="items-center xl:flex xl:space-x-8 xl:font-medium xl:text-white xl:pr-20">
            <li>
              <Typography color="white" className="font-medium">
                &copy; 2024
              </Typography>
            </li>
            <li>
              <a className=" hover:text-gray-300">
                The Team Mission
              </a>
            </li>
            <li>
              <a className=" hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-gray-300">
                Login
              </a>
            </li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
