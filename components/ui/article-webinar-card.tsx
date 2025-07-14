import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface ArticleWebinarCardProps {
  imagePath: string;
  imageAlt: string;
  tags: string;
  title: string;
  views: number;
  date: string;
  href?: string;
}

const ArticleWebinarCard: React.FC<ArticleWebinarCardProps> = ({
  imagePath,
  imageAlt,
  title,
  tags,
  views,
  date,
  href = "#",
}) => {

  return (
    <Link className="border border-[#C9C9C9]" href={href}>
      <Image
        src={imagePath}
        alt={imageAlt}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 h-44">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-4">
            <div className="h-12 text-base text-black font-bold line-clamp-2 w-full">{title}</div>
            <div className={"text-sm text-black font-normal"}>
              {tags}
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">{views} Views</span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ArticleWebinarCard;
