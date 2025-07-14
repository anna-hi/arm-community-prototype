import React from "react";
import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import "@/styles/globals.css";

interface CDIPCardProps {
  status?: "Completed" | "Performing";
  statusText?: string;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  code?: string;
  leadOrg?: string;
  principalInvestigator?: string;
  tags: string[];
  children?: React.ReactNode;
}

const CDIPCard: React.FC<CDIPCardProps> = ({
  status,
  imageSrc,
  imageAlt = "Project image",
  title,
  code,
  leadOrg,
  principalInvestigator,
  tags,
}) => {
  return (
    <div
      className="bg-white h-[540px] flex flex-col relative border border-gray-200 overflow-hidden"
      style={{ minWidth: 323 }}
    >
      <div className="relative flex justify-center items-center">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={323}
            height={150}
            className="object-contain w-full"
          />
        )}
        {/* Status text and icon on top left of image */}
        <div className="absolute p-2 top-2 left-2 flex items-center gap-2 z-10">
          {status === "Completed" && (
            <span className="w-3 h-3 rounded-full bg-[#2E844A]"></span>
          )}
          {status === "Performing" && (
            <span className="w-3 h-3 rounded-full bg-armYellow"></span>
          )}
          <span className="caption bg-white/80 px-2 py-0.5 rounded font-semibold text-xs">{status}</span>
        </div>
      </div>
      <div className="cdip-card-text">
        <div>
          <div className="py-2 flex items-center w-full justify-between">
            <div className="body-small font-bold ">{code}</div>
            <Star className="arm-yellow w-6 h-6" aria-label="Performing" />
          </div>
          <h3 className="pr-4 pb-4 text-left w-full">{title}</h3>
          {tags && tags.length > 0 && (
            <div className="flex justify-start gap-2 pb-4 w-full flex-wrap">
              {tags.map((cat, idx) => (
                <span
                  key={cat + idx}
                  className="font-medium body-small-bold card-tag"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="body-small font-bold w-full">
          Lead Organization:
          <p className="body-small mb-2 font-normal">{leadOrg}</p>
          Principal Investigator:
          <p className="body-small font-normal">{principalInvestigator}</p>
        </div>
      </div>
    </div>
  );
};

export default CDIPCard;
