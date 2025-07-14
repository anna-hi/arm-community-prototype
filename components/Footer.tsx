import React from "react";
import { MainButton } from "./MainButton";
import "@/styles/globals.css";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="bg-[#222] text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/images/homepage/arm-footer-logo.png"
              alt="ARM Logo"
              width={193}
              height={75}
              className=""
            />
          </div>
          <p className="copyright-text">
            Copyright © 2025 Advanced Robotics for Manufacturing Institute. All
            rights reserved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-6 md:gap-0">
          <div className="mr-0 md:mr-8 flex items-start gap-2 mb-6 sm:mb-0">
            <FaLocationDot className="arm-yellow" />
            <div>
              <h6 className="mb-1.5">Address</h6>
              <p className="text-sm">
                Mill 19 at Hazelwood Green
                <br />
                4720 Technology Dr, Suite 300
                <br />
                Pittsburgh, PA 15219
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 mb-6 sm:mb-0">
            <FaPhoneAlt className="arm-yellow" />
            <div>
              <h6 className="font-semibold mb-1.5">Phone</h6>
              <p className="text-sm">412.322.7800</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-64">
          <h6 className="font-semibold mb-4">Need Help?</h6>
          <MainButton
            text="Contact ARM"
            className="small-main-button mb-2"
          ></MainButton>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
