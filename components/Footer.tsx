import React from "react";
import { MainButton } from "./MainButton";
import "@/styles/globals.css";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="bg-[#222] text-white py-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-row gap-8 items-end">
        <div>
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
        <div className="flex flex-row w-full">
          <div className="mr-8">
            <h4 className="mb-1.5">Address</h4>
            <p className=" text-sm">
              Mill 19 at Hazelwood Green
              <br />
              4720 Technology Dr, Suite 300
              <br />
              Pittsburgh, PA 15219
            </p>
          </div>
          <div className="">
            <h4 className="font-semibold mb-1.5">Phone</h4>
            <p className="text-sm">412.322.7800</p>
          </div>
        </div>
        <div className="w-64">
          <h4 className="font-semibold mb-4">Need Help?</h4>
          <MainButton
            text="Contact ARM"
            className="small-main-button w-full"
          ></MainButton>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
