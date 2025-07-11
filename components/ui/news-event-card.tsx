import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface NewsEventCardProps {
  imagePath: string;
  imageAlt: string;
  caption?: string;
  title: string;
  newsInfo?: {
    date: string;
  };
  eventInfo?: {
    date: string;
    time?: string;
    location: string;
  };
  href?: string;
}

const NewsEventCard: React.FC<NewsEventCardProps> = ({
  imagePath,
  imageAlt,
  caption,
  title,
  newsInfo,
  eventInfo,
  href = "#",
}) => {
  const renderedCaption = caption ?? "Member News";

  const renderedFooter = newsInfo ? (
    <div className="text-sm font-normal">{newsInfo.date}</div>
  ) : (
    <div className="space-y-1 text-sm text-[#4C4F4C]">
      <div className="flex items-center">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="clamp-1">{eventInfo?.date}</span>
      </div>
      {eventInfo?.time && (
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          <span className="clamp-1">{eventInfo?.time}</span>
        </div>
      )}
      <div className="flex items-center">
        <MapPin className="w-4 h-4 mr-2" />
        <span className="clamp-1">{eventInfo?.location}</span>
      </div>
    </div>
  );

  return (
    <Link className="border border-[#C9C9C9]" href={href}>
      <Image
        src={imagePath}
        alt={imageAlt}
        width={300}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 h-56">
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className="font-bold">{renderedCaption}</div>
            <h3
              className={`font-medium font-montserrat mb-2 text-2xl ${
                newsInfo ? "clamp-4" : "clamp-3"
              }`}
            >
              {title}
            </h3>
          </div>
          {renderedFooter}
        </div>
      </div>
    </Link>
  );
};
export default NewsEventCard;
