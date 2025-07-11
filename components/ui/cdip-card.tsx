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
      className="bg-white h-[540px] rounded-xl flex flex-col relative border border-gray-200 overflow-hidden"
      style={{ minWidth: 323 }}
    >
      {/* Top section: status + image */}
      <div className="flex items-center justify-between p-6 pb-0">
        <div className="flex items-center gap-2">
          {status === "Completed" && (
            <CheckCircle
              className="text-green-600 w-6 h-6"
              aria-label="Completed"
            />
          )}
          {status === "Performing" && (
            <CheckCircle className="yellow w-6 h-6" aria-label="Performing" />
          )}
          <span
            className="text-lg font-medium text-black"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center pt-2 pb-4">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={120}
            height={150}
            className="object-contain"
          />
        )}
      </div>
      <div className="cdip-card-text">
        <div>
          <div className="flex items-center w-full justify-between">
            <div className="body-small font-bold">{code}</div>
            <Star className="text-green-600 w-6 h-6" aria-label="Completed" />
          </div>
          <h3 className="pb-4 text-left w-full">{title}</h3>
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
